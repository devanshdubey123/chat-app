import firebase from "firebase/app";

const config={
    apiKey: "AIzaSyCN0C53OrlDsfGmencJG2foiuPOdVWM_I8",
    authDomain: "chat-web-app-f5810.firebaseapp.com",
    databaseURL: "https://chat-web-app-f5810-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-f5810",
    storageBucket: "chat-web-app-f5810.appspot.com",
    messagingSenderId: "207343488519",
    appId: "1:207343488519:web:626bbdd7f1562e9072e4a2"
  };
const app =firebase.initializeApp(config);