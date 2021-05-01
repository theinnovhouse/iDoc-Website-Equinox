function logout(){
    //window.location.replace("index.html");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("Signed Out");
        window.location.assign("index.html");

      }).catch((error) => {
        // An error happened.
        alert(error);
      });
  }