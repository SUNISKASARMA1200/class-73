import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAdGk0oE_zIXS79liPCZNIfRBUK5nm1NmU",
  authDomain: "book-transaction-71.firebaseapp.com",
  projectId: "book-transaction-71",
  storageBucket: "book-transaction-71.appspot.com",
  messagingSenderId: "933058475909",
  appId: "1:933058475909:web:5ef2a6bf228fe9b59db6ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
