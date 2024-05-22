import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqU49aX1yQdChPQim-OGgYoaDEd7m5WoU",
  authDomain: "weshare-2275f.firebaseapp.com",
  projectId: "weshare-2275f",
  storageBucket: "weshare-2275f.appspot.com",
  messagingSenderId: "1006330913174",
  appId: "1:1006330913174:web:2c4bf7e99e63c7c1dcbdb7"
};

// Initialize Firebase
const firebaseApplication = initializeApp(firebaseConfig);
const firebaseStorage = getStorage();
const firebaseDatabase = getDatabase();

export { firebaseStorage, firebaseDatabase };