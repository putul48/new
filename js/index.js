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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logout_button").style.display = "block";
    document.getElementById("login_button").style.display = "none";

    document.getElementById("phonenumber").style.display = "none";
    document.getElementById("contactus").style.display = "block";


    var user = firebase.auth().currentUser;

    window.alert("Welcome");

    if(user != null){

      var email_id = user.email;
      //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("logout_button").style.display = "none";
    document.getElementById("login_button").style.display = "block";

    document.getElementById("contactus").style.display = "none";
    document.getElementById("phonenumber").style.display = "block";

  }
});

function logout(){
  firebase.auth().signOut().then(x=>{
    document.location.href="./index.html";
  });

}
