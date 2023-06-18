import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCBsZnNTFibHTrhgbMbUMqMfwfZ3l-ADs",
  authDomain: "newprs-4bffd.firebaseapp.com",
  projectId: "newprs-4bffd",
  storageBucket: "newprs-4bffd.appspot.com",
  messagingSenderId: "563882842260",
  appId: "1:563882842260:web:e4beeaedb3d4d850983c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
