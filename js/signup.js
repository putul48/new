// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBrRzWkRST39XTkNrRapSWSwCn5moglgUs",
  authDomain: "danceputul48.firebaseapp.com",
  databaseURL: "https://danceputul48.firebaseio.com",
  projectId: "danceputul48",
  storageBucket: "danceputul48.appspot.com",
  messagingSenderId: "732151917610",
  appId: "1:732151917610:web:eeea255c584b224a39e753",
  measurementId: "G-DM0MF417E6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);









  document.getElementById('form-signin').addEventListener('submit',submitForm);//submit button paoar shathe shathe will call submitform

var msgref= firebase.database().ref('messages');//creats a table in the database named messages





function submitForm(e)
{
  e.preventDefault();//prevents html from doing any default work upon getting an event

  var name= document.getElementById('inputUsername').value;
  var email= document.getElementById('inputEmail').value;
  //inputPassword
  var pass= document.getElementById('inputPassword').value;
  //var message= getInputVal('message');

  saveMessage(name,email,pass);

  /*document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);*/

  document.getElementById('form-signin').reset();

  setTimeout(function(){
    document.location.href="./index.html";
  },2000);

}

function getInputVal(id)
{
  return document.getElementById(id).value; //returning the value of designated id
}

function saveMessage(name,email,pass)
{
  var newmsgref= msgref.push();

  newmsgref.set({
    name: name,
    email:email,
  });



  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert("error" +errorMessage);
    });
}


function logout(){
  firebase.auth().signOut();
  document.location.href="./login.html";
}
