import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector('#register-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            swal({
                title: "User Register",
                text: "User Register Successful",
                icon: "success",
                button: "Ok",
            });
            email.value = '';
            password.value = '';
            console.log(user);
        })
        .catch((error) => {
            swal({
                title: "User Register Failed",
                text: error.message,
                icon: "error",
                button: "Ok",
            });
            console.log(error.message);
        });
});
