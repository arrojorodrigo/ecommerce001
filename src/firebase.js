import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeEeCWRnfEZUIYQQBht2EExirCRNj4k-o",
  authDomain: "ecommercecoder-791c9.firebaseapp.com",
  projectId: "ecommercecoder-791c9",
  storageBucket: "ecommercecoder-791c9.appspot.com",
  messagingSenderId: "678184606731",
  appId: "1:678184606731:web:fe3cfafdd8d3bca85abb0e"
};

const app = initializeApp(firebaseConfig);