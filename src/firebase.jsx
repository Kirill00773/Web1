import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Добавляем модуль аутентификации

const firebaseConfig = {
  apiKey: "AIzaSyDdOn5o5gV3peH4yy_d2nyJ6shYU0FwHrw",
  authDomain: "webproject-c6297.firebaseapp.com",
  projectId: "webproject-c6297",
  storageBucket: "webproject-c6297.appspot.com", 
  messagingSenderId: "476141537315",
  appId: "1:476141537315:web:438272d318f8414af2c996",
  measurementId: "G-E01J36SPWY"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 