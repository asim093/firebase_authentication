import { signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector('#login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const googleLoginButton = document.querySelector('#google-login');
const githubLoginButton = document.querySelector('#github-login');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            swal({
                title: "User Login",
                text: "User Login Successful",
                icon: "success",
                button: "Ok",
            }).then(() => {
                window.location = 'home.html';
            });
        })
        .catch((error) => {
            swal({
                title: "User Login Failed",
                text: error.message,
                icon: "error",
                button: "Ok",
            });
        });
});

googleLoginButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            swal({
                title: "User Login",
                text: "User Login Successful",
                icon: "success",
                button: "Ok",
            }).then(() => {
                window.location = 'home.html';
            });
        })
        .catch((error) => {
            swal({
                title: "User Login Failed",
                text: error.message,
                icon: "error",
                button: "Ok",
            });
        });
});

githubLoginButton.addEventListener('click', () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            swal({
                title: "User Login",
                text: "User Login Successful",
                icon: "success",
                button: "Ok",
            }).then(() => {
                window.location = 'home.html';
            });
        })
        .catch((error) => {
            swal({
                title: "User Login Failed",
                text: error.message,
                icon: "error",
                button: "Ok",
            });
        });
});
