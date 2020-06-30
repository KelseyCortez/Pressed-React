import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDwfuX34PENeQASunlBUhm4szrCjOz8RUE",
    authDomain: "pressed-c1d0f.firebaseapp.com",
    databaseURL: "https://pressed-c1d0f.firebaseio.com",
    projectId: "pressed-c1d0f",
    storageBucket: "pressed-c1d0f.appspot.com",
    messagingSenderId: "724452178520",
    appId: "1:724452178520:web:7b6f447539ba6ec35f282d",
    measurementId: "G-N305ED04YK"
  };

  //initializes firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();