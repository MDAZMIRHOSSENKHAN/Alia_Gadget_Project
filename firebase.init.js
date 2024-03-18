import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAuyYX-dZ07QWmh-7yoKatV8SwYDHyDw4",
  authDomain: "alia-gadget-ui.firebaseapp.com",
  projectId: "alia-gadget-ui",
  storageBucket: "alia-gadget-ui.appspot.com",
  messagingSenderId: "253202033278",
  appId: "1:253202033278:web:deba47c3fc9d21f1dac62f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth 
