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
    // resources.auth.signInWithPopup(resources.provider)
    //   .then((res)=>{
    //     console.log(res);
    //   })
    //   .catch((error)=>{
    //     console.error(error);
    // });
  },
  facebookLogin: () => {
    // firebase.auth().signInWithPopup(providerFB)
    //   .then(function(result) {
    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     console.log(user);
    //   }).catch(function(error) {
    //   console.error(error);
    // });
  }
};

export default { authModule, resources};
