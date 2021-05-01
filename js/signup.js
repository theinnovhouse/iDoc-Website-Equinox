//Validate password
var password = document.getElementById("signupPassword"),
confirm_password = document.getElementById("signupConfirmpassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } 
  else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirmpassword.onkeyup = validatePassword;

//Authentication
// document.getElementById("signup-form").addEventListener('submit', authSignup)

function authSignup(){
  console.log("1");
    //Taking Values from Form
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      waitTime();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
}

function waitTime(){
  var delayInMilliseconds = 2000;
  setTimeout(function() {
    userData();
  }, delayInMilliseconds);
}

function userData(){
  console.log("2");
  var user = firebase.auth().currentUser;
  if (user != null){
     var userID = user.uid;
  }
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let phone = document.getElementById("signupPhone").value;
  let city = document.getElementById("signupCity").value;
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(city);
  writeUserData(userID, name, email, phone, city);
}

function writeUserData(userID, name, email, phone, city){
console.log("3");
firebase.database().ref('Users/' + userID).set({
  uid: userID,
  name: name,
  email: email, 
  phone: phone,
  city: city,
});
}


$("#signup-form").submit(function(e) {
e.preventDefault();
});