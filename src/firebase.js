import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCkaCEIqaY4Pre6mUfZmL91dqJ_hI-CKxo",
    authDomain: "iced-chat.firebaseapp.com",
    projectId: "iced-chat",
    storageBucket: "iced-chat.appspot.com",
    messagingSenderId: "668564662581",
    appId: "1:668564662581:web:7510cbc1571010422a447c"
  }).auth();

