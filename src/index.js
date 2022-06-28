import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp(
  {
    apiKey: "AIzaSyCwHGlxju9zt1SFc--Kr8eHlr0paQJcs-4",
    authDomain: "chat-react-23c47.firebaseapp.com",
    projectId: "chat-react-23c47",
    storageBucket: "chat-react-23c47.appspot.com",
    messagingSenderId: "271890381450",
    appId: "1:271890381450:web:d2cb957fb9a2583644cb73",
    measurementId: "G-CM5C02T9DP"
  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);