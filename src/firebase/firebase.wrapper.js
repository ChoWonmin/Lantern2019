import firebase from 'firebase';
import config from './firebase.key';

firebase.initializeApp(config);

const resources = {
  database: firebase.firestore().collection('test'),
  storage: firebase.storage(),
};

export default resources;
