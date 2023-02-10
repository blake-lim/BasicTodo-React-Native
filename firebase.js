// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn5AklmASHXfDF0lFO1pOR-Wo2dXxrq3o",
  authDomain: "react-native-todo-app-6c500.firebaseapp.com",
  projectId: "react-native-todo-app-6c500",
  storageBucket: "react-native-todo-app-6c500.appspot.com",
  messagingSenderId: "507996042038",
  appId: "1:507996042038:web:5ab1bac252b3d9d6a3b997"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;