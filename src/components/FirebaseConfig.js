
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAq10wzuG0q8yZn1WOma8-qvCjQ94UZb7k",
  authDomain: "emailpasswordlogin-f2ab0.firebaseapp.com",
  projectId: "emailpasswordlogin-f2ab0",
  storageBucket: "emailpasswordlogin-f2ab0.appspot.com",
  messagingSenderId: "595853404026",
  appId: "1:595853404026:web:808706524dd1179a81d8c3"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)