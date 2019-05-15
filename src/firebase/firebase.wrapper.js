import firebase from 'firebase';
import config from './firebase.key';
import _ from 'lodash';

import { consoleError } from 'vuetify/lib/util/console';

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
  upload: async (path, file) => await resources.storage.ref(path).put(file)
};

const dataModule = {
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
    console.log(messageRoomId, data);
    return data.messages;
  },
  uploadCard: async (image, hashtag) => {
    await storageModule.upload('image/card/test', image);
  },
  addTest: (obj) => {
    resources.database.collection('Users').doc(obj.email).set(obj);
  }
};

export { authModule, resources, dataModule};
