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
  googleLogin: () => {
    resources.auth.signInWithPopup(resources.provider)
      // .then((res)=>{
      //
      // })
      // .catch((error)=>{
    // });
  },
  facebookLogin: () => {
    firebase.auth().signInWithPopup(providerFB)
      // .then(function(result) {
        // const token = result.credential.accessToken;
        // const user = result.user;

      // }).catch(function(error) {
    // });
  }
};

const dataModule = {
  readMessageRooms: async (id) => {
    const ret = (await resources.database.collection('Users').doc(id).get()).data().messageRooms;

    console.log(ret);

    const rooms = await _.map(ret, async e=> {
      const tmp = (await resources.database.collection('MessageRooms').doc(e).get()).data();
      console.log(e, 'sajndjskbfnjks');

      return tmp;
    });

    console.log(rooms, 'rooms');
  },
  sendMsg: () => 'send msg'
};

export { authModule, resources, dataModule};
