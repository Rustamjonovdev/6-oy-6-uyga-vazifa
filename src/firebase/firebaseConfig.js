import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_Vb-ycUuFOEu_v5MirgHIxgcFPKehxuU",
  authDomain: "mymarket-4a3ca.firebaseapp.com",
  projectId: "mymarket-4a3ca",
  storageBucket: "mymarket-4a3ca.appspot.com",
  messagingSenderId: "1988040927",
  appId: "1:1988040927:web:c881bb0f636e418e68716a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();