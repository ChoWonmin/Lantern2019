import firebase from 'firebase';
import config from './firebase.key';

firebase.initializeApp(config);

const resources = {
  auth: firebase.auth(),
  provider: new firebase.auth.GoogleAuthProvider(),
  database: firebase.firestore().collection('test'),
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
    sendMsg: () => 'send msg'
};

export { authModule, resources, dataModule};
