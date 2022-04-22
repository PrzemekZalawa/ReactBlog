import { initializeApp} from "firebase/app";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWjxc6PqkzA-Kx7Vl9S4V5cYm15NOl2ew",
  authDomain: "zalawa-cupial-reactblog.firebaseapp.com",
  projectId: "zalawa-cupial-reactblog",
  storageBucket: "zalawa-cupial-reactblog.appspot.com",
  messagingSenderId: "728072918619",
  appId: "1:728072918619:web:860efc0d5e2e1023ac117e",
  measurementId: "G-DK33X5J4T4"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const storage = getStorage(app);