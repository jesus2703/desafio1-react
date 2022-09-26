import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcj4OiuzGkVMT3jIG-6_3ftiLhtaT0esA",
  authDomain: "carnes-ag.firebaseapp.com",
  projectId: "carnes-ag",
  storageBucket: "carnes-ag.appspot.com",
  messagingSenderId: "28504701957",
  appId: "1:28504701957:web:ca26c0d521f455cdedf06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db


