import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"; // Import the correct module

const firebaseConfig = {
    apiKey: "AIzaSyAdxU7tgvF4snKjzYjihTb1lcTKk-PTFxE",
    authDomain: "loginauth-4ad92.firebaseapp.com",
    projectId: "loginauth-4ad92",
    storageBucket: "loginauth-4ad92.appspot.com",
    messagingSenderId: "406827313133",
    appId: "1:406827313133:web:1921de8b0c538c88e329e4",
    measurementId: "G-SSM4T7LGES"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Fixed the typo here
