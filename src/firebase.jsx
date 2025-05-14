import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdOm5q5gV3peH4yy_d2nyJ6shYUOFwHrw",
  authDomain: "webproject-c6297.firebaseapp.com",
  projectId: "webproject-c6297",
  storageBucket: "webproject-c6297.firebasestorage.app",
  messagingSenderId: "476141537315",
  appId: "1:476141537315:web:438272d318f8414af2c996",
  measurementId: "G-E01J36SPMY"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



