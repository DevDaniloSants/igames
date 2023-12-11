import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBZX7Csy7hbTwJLuYWcdVXMw952tgJS1zE",
  authDomain: "miniblog-8f852.firebaseapp.com",
  projectId: "miniblog-8f852",
  storageBucket: "miniblog-8f852.appspot.com",
  messagingSenderId: "1022412087828",
  appId: "1:1022412087828:web:206454661bf4d5140ebd01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db