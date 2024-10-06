import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyCyZ0EywGhJGEY7CPVbsnz35dhcX2i41ws",
    authDomain: "meeseeksbox-5eab0.firebaseapp.com",
    databaseURL: "https://meeseeksbox-5eab0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meeseeksbox-5eab0",
    storageBucket: "meeseeksbox-5eab0.appspot.com",
    messagingSenderId: "1010815674917",
    appId: "1:1010815674917:web:0f40678d7fd2596ac6edcc",
    measurementId: "G-L5WMNHQPYV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Function to handle button press
document.getElementById('summonButton').addEventListener('click', function() {
    // Generate a timestamp for when the button is pressed
    var requestTime = new Date().toLocaleString();
    
    // Send the help request to Firebase
    database.ref('help_requests').push({
        contestant: 'ContestantNameOrID',  // This could be dynamic if you have usernames
        request_time: requestTime
    }).then(() => {
        alert('Mr. Meeseeks has been summoned!');
    }).catch(error => {
        console.error('Error summoning Mr. Meeseeks:', error);
    });
});
