//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCKBfvQbKmH2Mxff5IsgwEkwwqzpnMJxYc",
      authDomain: "kwitter-acd0b.firebaseapp.com",
      databaseURL: "https://kwitter-acd0b-default-rtdb.firebaseio.com",
      projectId: "kwitter-acd0b",
      storageBucket: "kwitter-acd0b.appspot.com",
      messagingSenderId: "156740836903",
      appId: "1:156740836903:web:436c71c0bc8f51a915b802",
      measurementId: "G-EVDQYT1XG3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,

      });

      document.getElementById("msg").value = "";

}
