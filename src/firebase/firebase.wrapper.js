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
  readMessageRooms: async (messageRooms) => {
    const rooms = await Promise.all(_.map(messageRooms, async e=> {
      const ref = resources.database.collection('MessageRooms').doc(e);
      const room = (await ref.get()).data();
      room.message = (await ref.collection('messages').get());
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
