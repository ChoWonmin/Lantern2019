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
  facebookLogin: () => {
    firebase.auth().signInWithPopup(providerFB)
      .then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;

        console.log(user);

      }).catch(function(error) {
    });
  }
};

const dataModule = {
  addUser: (email, name) => {
    resources.database.collection('Users').doc(email).add({
      email: email,
      name: name
    });
  },
  readUser: async (email) => {
    return (await resources.database.collection('Users').doc(email).get()).data()
  }
  ,
  readMessageRooms: async (id) => {
    const ret = (await resources.database.collection('Users').doc(id).get()).data().messageRooms;
    const rooms = await Promise.all(_.map(ret, async e=> {
      const ref = resources.database.collection('MessageRooms').doc(e);
      const room = (await ref.get()).data();
      const messages = [];
      (await ref.collection('messages').get()).forEach(e => {
        messages.push(e.data());
      });

      room.messages = messages;
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
  listenMessageRoom: () => {

  }
};

export { authModule, resources, dataModule};
