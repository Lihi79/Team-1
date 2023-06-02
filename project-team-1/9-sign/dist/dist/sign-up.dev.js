"use strict";

// user sign up
// הרשמות לאתר
var User =
/** @class */
function () {
  function User(userName, email, password, cpass) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.cpass = cpass;
    this.uid = uid();
  }

  return User;
}();

var users = [];

function uid() {
  return "id- " + Math.random();
}

var signUpButton = document.getElementById("singUp");
signUpButton.addEventListener("click", function (event) {
  alert("ffffffffff");
});

onclick = function onclick(event) {};

function signUp(evt) {
  evt.preventDefault();
  var userName = evt.target.elements.userName.value;
  var email = evt.target.elements.email.value;
  var password = evt.target.elements.password.value;
  var cpass = evt.target.elements.cpass.value;
  users.push(new User(userName, email, password, cpass));
  saveUserLocalStorage(users);
  console.log(userName.value);
}

function saveUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserLocalStorage() {
  var getLcPart1 = localStorage.getItem("user");
  if (!getLcPart1) throw new Error("get Local Storage is null");
  var getLcPart2 = JSON.parse(getLcPart1);
  return getLcPart2;
}

function signUpBtn(user) {
  console.log("hello");
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../1-index.html";
} // function ifLogged() {
//   let userLogged = localStorage.JSON.stringify.getItem("userName");
//   if (userLogged === ) {
//     alert("You are logged in.");
//   } else {
//     alert("ERROR.");
//   }
// }