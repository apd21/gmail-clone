import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZZt4wl7lFbkxqK327ZWVKfq1SJ76a8dE",
    authDomain: "clone-6db23.firebaseapp.com",
    projectId: "clone-6db23",
    storageBucket: "clone-6db23.appspot.com",
    messagingSenderId: "378772945314",
    appId: "1:378772945314:web:d2d0da499dfed569a0dafb",
    measurementId: "G-7CZL2X4QXX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};