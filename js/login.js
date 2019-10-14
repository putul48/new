var config = {
    apiKey: "AIzaSyBrRzWkRST39XTkNrRapSWSwCn5moglgUs",
    authDomain: "danceputul48.firebaseapp.com",
    databaseURL: "https://danceputul48.firebaseio.com",
    projectId: "danceputul48",
    storageBucket: "danceputul48.appspot.com",
    messagingSenderId: "732151917610",
    appId: "1:732151917610:web:eeea255c584b224a39e753",
    measurementId: "G-DM0MF417E6"
  };
firebase.initializeApp(config);

document.getElementById('signin_button').addEventListener('click',x=>{
  x.preventDefault();
    var userEmail = document.getElementById('inputEmail').value;
    var userPass = document.getElementById('inputPassword').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(e=>{
      document.location.href="./index.html"
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });

});
