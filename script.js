// Import the Firebase SDKs needed
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw_OnAaRGs08AmiKca-POiL4n9biWM8tw",
    authDomain: "loginform-96451.firebaseapp.com",
    projectId: "loginform-96451",
    storageBucket: "loginform-96451.appspot.com",
    messagingSenderId: "51790466765",
    appId: "1:51790466765:web:fc7130d9cbcbfebd6de384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Validate form and submit data
document.querySelector("#submit").addEventListener('click', (event) => {
    event.preventDefault();

    const usernameBlock = document.querySelector('#username');
    const passwordBlock = document.querySelector('#password');
    const username = usernameBlock.value;
    const password = passwordBlock.value;

    if (username === "" || password === "") {
        alert("Please fill out all required fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Send data to Firebase
    set(ref(db, 'user/' + username), {
        username: username,
        password: password
    })
    .then(() => {
        alert("Login Successful!");
        usernameBlock.value = '';
        passwordBlock.value = '';
    })
});
