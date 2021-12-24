import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
  apiKey: "AIzaSyDQ9l1ABe-4-MSERXyZRljc3MZjTGTGYuk",
  authDomain: "chat-react-ca2fd.firebaseapp.com",
  projectId: "chat-react-ca2fd",
  storageBucket: "chat-react-ca2fd.appspot.com",
  messagingSenderId: "637969157875",
  appId: "1:637969157875:web:ba71c1268bec4f6d71b186",
  measurementId: "G-3MFK0892Z2"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>,
  document.querySelector('body')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
