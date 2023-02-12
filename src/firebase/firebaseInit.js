import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0TaoD6gfX8uPy1LoSEeG_S2HqJF_eVpU",
  authDomain: "fireblogapp-869b7.firebaseapp.com",
  projectId: "fireblogapp-869b7",
  storageBucket: "fireblogapp-869b7.appspot.com",
  messagingSenderId: "60196069006",
  appId: "1:60196069006:web:a71e0f1c1424bcf22a33df"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore();