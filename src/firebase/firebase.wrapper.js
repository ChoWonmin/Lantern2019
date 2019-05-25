import firebase from 'firebase';
import config from './firebase.key';
import analytics from '../analytics/analytic';
import _ from 'lodash';

firebase.initializeApp(config);

const resources = {
  auth: firebase.auth(),
  provider: new firebase.auth.GoogleAuthProvider(),
  database: firebase.firestore(),
  storage: firebase.storage(),
};

const providerFB = new firebase.auth.FacebookAuthProvider();
providerFB.addScope('user_birthday');
providerFB.addScope('user_gender');

const authModule = {
  googleLogin: async () => await resources.auth.signInWithPopup(resources.provider),
  facebookLogin: async() => await firebase.auth().signInWithPopup(providerFB)
};

const storageModule = {
  upload: async (path, file) => await resources.storage.ref(path).put(file),
  getUrl: async (path) => await resources.storage.ref(path).getDownloadURL()
};

const dataModule = {
  readCardsByUserID: async (userID) => {
    const res = [];
    (await resources.database.collection('Users').doc(userID).collection('cards').get())
        .forEach(doc => {
          res.push(doc.data())
    });
    return res;
  },
  readHashtagByCardID: async (cardID) => {
    return (await resources.database.collection('Cards').doc(cardID).get()).data();
  },
  hasUser: async (email) => {
    return (await resources.database.collection('Users').doc(email).get()).exists
  },
  addUser: async (email, name) => {
    resources.database.collection('Users').doc(email).add({
      email: email,
      name: name
    });
  },
  readUser: async (email) => {
    try {
      const doc = await resources.database.collection('Users').doc(email).get();
      if (!doc.exists) {
        return null;
      } else {
        return doc.data();
      }

    } catch (e) {
      return e;
    }
  },
  readMessageRooms: async (messageRooms) => {
    const rooms = await Promise.all(_.map(messageRooms, async e=> {
      const ref = resources.database.collection('MessageRooms').doc(e);
      const room = (await ref.get()).data();
      (await ref.collection('messages').orderBy('time').limit(1).get()).forEach(e=>room.message=e.data());
      return room;
    }));

    return rooms;
  },
  sendMsg: (id, sender, receiver, text) => {
    resources.database.collection('MessageRooms').doc(id).collection('messages').add({
      sender,
      receiver,
      text,
      time: new Date()
    });
  },
  listenMessageRoom: async (messageRoomId) => {
    const data = (await resources.database.collection('MessageRooms').doc(messageRoomId).onSnapshot()).data();
    return data.messages;
  },
  uploadCard: async (image, hashtag, email, region) => {

    const ext = image.name.split('.').slice(-1).pop();
    const ref = resources.database.collection('Cards');

    const doc = await ref.add({});

    const obj = {
      id: doc.id,
      content: '',
      extension: ext,
      hashtags: hashtag,
      lantern: email,
      region: region
    };
    ref.doc(doc.id).set(obj);
    storageModule.upload(`image/card/${doc.id}`, image);
    resources.database.collection('Users').doc(email).collection('cards').doc(doc.id).set({id: doc.id});

    const hashtagRef = resources.database.collection('Hashtags');
    _.forEach(hashtag, async e=>{
      const val = (await hashtagRef.doc(e).get()).data();

      if (val===undefined) {
        hashtagRef.doc(e).set({
          dislikeCount: 0,
          name: e,
          likeCount: 0
        });
      }
    });
  },
  readCards: async (region) => {
    const res = [];
    (await resources.database.collection('Cards').where('region','==',region).limit(10).get()).forEach(e=>res.push(e.data()));
    return res;
  },
  updateHashtag: async (hashtags, like, email) => {
    const userRef = resources.database.collection('Users').doc(email);

    _.forEach(hashtags, async e => {
      const doc = (await resources.database.collection('Hashtags').doc(e).get());

      if (like) {
        if (doc.exists===true) {
          resources.database.collection('Hashtags').doc(e).update({
            likeCount: doc.data().likeCount+1
          });
        } else {
          resources.database.collection('Hashtags').doc(e).set({
            likeCount: 1,
            dislikeCount: 0
          });
        }

        const lhDoc = (await userRef.collection('likeHashtags').doc(e).get());
        if (lhDoc.exists) {
          userRef.collection('likeHashtags').doc(e).update({
            count: lhDoc.data().count+1
          });
        } else {
          userRef.collection('likeHashtags').doc(e).set({
            name: e,
            count: 1
          });
        }
      } else { // dislike
        if (doc.exists===true) {
          resources.database.collection('Hashtags').doc(e).update({
            dislikeCount: doc.data().count+1
          });
        } else {
          resources.database.collection('Hashtags').doc(e).set({
            likeCount: 0,
            dislikeCount: 1
          });
        }

        const dlhDoc = (await userRef.collection('disLikeHashtags').doc(e).get());
        if (dlhDoc.exists) {
          userRef.collection('disLikeHashtags').doc(e).update({
            count: dlhDoc.data().count+1
          });
        } else {
          userRef.collection('disLikeHashtags').doc(e).set({
            name: e,
            count: 1
          });
        }
      }
    });
  },
};

const analyticsModule = {
  updateCF: async (userID, otherID) => {
    const userLikeHashtags = [];
    const otherLikeHashtags = [];

    (await resources.database.collection('Users').doc(userID).collection('likeHashtags').get()).forEach(doc=>{
      userLikeHashtags.push(doc.data());
    });
    (await resources.database.collection('Users').doc(otherID).collection('likeHashtags').get()).forEach(doc=>{
      otherLikeHashtags.push(doc.data());
    });

    analytics.calcPearson(userLikeHashtags, otherLikeHashtags);

  }
};

export { authModule, resources, dataModule, storageModule, analyticsModule};
