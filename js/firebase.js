
//Get radio button value
function getCheckedValue(el) {
    for (var i = 0, length = el.length; i < length; i++) {
      if (el[i].checked) {
        return el[i].value;
        break;
      }
    }
    return '';
  }

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBAg9nx_WmLS0G_b-9kk8sVJN5DDBh3GLM",
    authDomain: "idoc-15037.firebaseapp.com",
    databaseURL: "https://idoc-15037-default-rtdb.firebaseio.com",
    projectId: "idoc-15037",
    storageBucket: "idoc-15037.appspot.com",
    messagingSenderId: "131276889872",
    appId: "1:131276889872:web:0f9aa9bd35ea8bba22cf95",
    measurementId: "G-9KETN943W5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  
  
//To read values of the form
function readData() {
    let chosenSlot = getCheckedValue(document.getElementsByName('t[]'));
    console.log(chosenSlot);
    let doctor = "Dr. Jane Ray";
    let user = "Guest User"
    let date = document.getElementById("date").value;
    writeUserData(chosenSlot, doctor, user, date);
  }
  
  //To push values to firebase
  function writeUserData(chosenSlot, doctor, user, date)
  {
      firebase.database().ref('appointment/').push({
      slot: chosenSlot,
      doctor: doctor, 
      uid: user,
      date: date
    });
    console.log("Hey");
}