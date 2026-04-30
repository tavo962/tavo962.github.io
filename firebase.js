import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics }  from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyAmv5iJs-X12jFY387sqczH_GCcIGwVai4",
  authDomain:        "tavo962-d8fe5.firebaseapp.com",
  projectId:         "tavo962-d8fe5",
  storageBucket:     "tavo962-d8fe5.firebasestorage.app",
  messagingSenderId: "718627833952",
  appId:             "1:718627833952:web:21c7b857595e2b45a25b05",
  measurementId:     "G-7KM51GY048",
};

export const app       = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db        = getFirestore(app);
