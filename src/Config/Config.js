import firebase from 'firebase';
import '@firebase/firestore';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyALAtiYrKKzWuvNzZ-9KY7Evy-wyhNZ83A",
    authDomain: "cine-f7f50.firebaseapp.com",
    databaseURL: "https://cine-f7f50.firebaseio.com",
    projectId: "cine-f7f50",
    storageBucket: "cine-f7f50.appspot.com",
    messagingSenderId: "693200012418"
};

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

export const db = firebaseApp.firestore(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const storageKey = 'AUTH_USER';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

export const getUser = () =>{
  return auth.currentUser;
}

export const provider = new firebase.auth.GoogleAuthProvider();

export const ELASTIC_API = "localhost:9200";
export const basicApi = "elastic:bDz!#$7tb&btBcooHLT-";