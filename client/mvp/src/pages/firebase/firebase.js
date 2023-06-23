import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWHrHhOcLskePw3M_RShjvD7JiPlykq0Q",
  authDomain: "mommysos-5004e.firebaseapp.com",
  projectId: "mommysos-5004e",
  storageBucket: "mommysos-5004e.appspot.com",
  messagingSenderId: "539910492623",
  appId: "1:539910492623:web:cb428a6ed5709fbd1202ba",
  measurementId: "G-EHWGN6J06L"
};

 export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
