import { signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const logoutButton = document.querySelector('#logout');

logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location = 'index.html';
        })
        .catch((error) => {
            console.error("Sign out error:", error);
        });
});
