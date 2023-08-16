// firebase config key setup

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

//your web app's firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCll5gksi9TqSW5emuJztlwsteyKhRzcxA",
  authDomain: "test-bcc09.firebaseapp.com",
  projectId: "test-bcc09",
  storageBucket: "test-bcc09.appspot.com",
  messagingSenderId: "864525403155",
  appId: "1:864525403155:web:251c3877dc9437d1926be6",
  measurementId: "G-LSSFGJ0HSZ"
}

if (!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}

export {firebase};