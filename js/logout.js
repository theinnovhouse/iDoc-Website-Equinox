function logout(){
    //window.location.replace("index.html");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("Signed Out");
        window.location.assign("login.html");

      }).catch((error) => {
        // An error happened.
        alert(error);
      });
  }

  firebase.auth().onAuthStateChanged(function(user){
  if(user){
      //user is signed in
      document.getElementById("login").style.display="none";
      document.getElementById("logout").style.display="block";
  }else{
    document.getElementById("login").style.display="block";
    document.getElementById("logout").style.display="none";
  }
});