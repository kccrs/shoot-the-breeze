import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAIEyJ1rT3RD0lzMx_nnc7bbP91DcDHZtQ",
  authDomain: "shoot-the-breeze-9f4d8.firebaseapp.com",
  databaseURL: "https://shoot-the-breeze-9f4d8.firebaseio.com",
  storageBucket: "shoot-the-breeze-9f4d8.appspot.com",
  messagingSenderId: "886652202399"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('messages');
