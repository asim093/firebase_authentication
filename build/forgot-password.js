import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector('#forgot-password-form');
const email = document.querySelector('#email');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            swal({
                title: "Password Reset Email Sent",
                text: "Please check your email for further instructions",
                icon: "success",
                button: "Ok",
            });
        })
        .catch((error) => {
            swal({
                title: "Error",
                text: error.message,
                icon: "error",
                button: "Ok",
            });
        });
});
