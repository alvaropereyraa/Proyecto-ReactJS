
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRDpd3CoZowd0YOu5HwG_BhdkW-7xCTCQ",
  authDomain: "pokemon-tienda-db.firebaseapp.com",
  projectId: "pokemon-tienda-db",
  storageBucket: "pokemon-tienda-db.firebasestorage.app",
  messagingSenderId: "543042868032",
  appId: "1:543042868032:web:5189b0c8031bfa86e1a0a5"
};

export const app = initializeApp(firebaseConfig);