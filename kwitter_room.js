var firebaseConfig = {
  apiKey: "AIzaSyA24C1ltUz0wSDLbsBNit1wQ7TJVAxyvdI",
  authDomain: "kwicker-ae542.firebaseapp.com",
  databaseURL: "https://kwicker-ae542-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwicker-ae542",
  storageBucket: "kwicker-ae542.appspot.com",
  messagingSenderId: "43824700686",
  appId: "1:43824700686:web:fd1abfeeb6665eff13cb5f"
};
firebase.initializeApp(firebaseConfig);
var user = localStorage.getItem("username");
document.getElementById("welcomer").innerHTML = "Welcome " + user;
function add_room() {
  var room_name = document.getElementById("room_name_input").value;
  console.log("Room created" - room_name);
  localStorage.setItem("room", room_name);
  firebase.database().ref("/").child(room_name).Update({
    task: "room created by " + user
  });
  window.location = "room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      var row = "<div class='rom_name' id="+ room_name + " onclick='change_screen(this.id)'>" + room_name + "</div><br><hr>";
      document.getElementById("room_names").innerHTML = row;
      });});}
getData();
