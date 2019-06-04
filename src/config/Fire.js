import firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "v",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const fire = firebase.initializeApp(config);
export default fire;
