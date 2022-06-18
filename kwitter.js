function save_user() {
    console.log("Saving user");
    user_name = document.getElementById("user_input").value;
    console.log(user_name);
    localStorage.setItem("username", user_name);
    window.location = "kwitter_room.html";
}