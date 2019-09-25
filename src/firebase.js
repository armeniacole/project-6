import firebase from 'firebase/app';
import 'firebase/database';

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCVuqwXZYioABjWrZjyJozN_sBlIVPIRP0",
    authDomain: "dinner-party-54c21.firebaseapp.com",
    databaseURL: "https://dinner-party-54c21.firebaseio.com",
    projectId: "dinner-party-54c21",
    storageBucket: "",
    messagingSenderId: "820179715918",
    appId: "1:820179715918:web:54d886a950d317bebdc01f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
