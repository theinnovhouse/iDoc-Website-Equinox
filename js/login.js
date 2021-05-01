//Authentication - Firebase - Login 
const auth = firebase.auth();

//document.getElementById("form").addEventListener('submit', login);

function login(){
  console.log("1");
    var ref = firebase.database().ref().child("Users");
    var loginID = document.getElementById("loginEmail").value;
    var loginPass = document.getElementById("loginPass").value;
    ref.orderByChild("email").equalTo(loginID).on("child_added", function(snapshot) {
        console.log(snapshot.key);
        console.log("2");
        firebase.auth().signInWithEmailAndPassword(loginID, loginPass)
        .then((userCredential) => {
            alert("Signed in Successfully");
            console.log("redirect");
            window.location.assign("index.html");
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        });  
    });
}

$("#form").submit(function(e) {
  e.preventDefault();
});
