// model
// --------
var User = /** @class */ (function () {
    function User(userName, email, password, cpass) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpass = cpass;
        this.uid = uid();
    }
    return User;
}());
var users = [];
// helper
// ---------
function uid() {
    return "id- " + Math.random();
}
function isPasswordCompared(password, comparePassword) {
    var isPasswordValid = password == comparePassword ? true : false;
    return isPasswordValid;
}
// view
// --------
var signUpButton = document.getElementById("signUpBtn");
// controller
// ---------------
signUpButton === null || signUpButton === void 0 ? void 0 : signUpButton.addEventListener("click", function (event) {
    signUp(event);
});
function signUp(evt) {
    evt.preventDefault();
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("cpass");
    if (userName.value.length == 0 ||
        email.value.length == 0 ||
        confirmPassword.value.length == 0) {
        alert("you need to fill all the fields!!!");
        return false;
    }
    users.push(new User(userName.value, email.value, password.value, confirmPassword.value));
    if (!isPasswordCompared(password.value, confirmPassword.value)) {
        alert("the 2 of the password need to be matched");
        return;
    }
    if (isUserNameAvailable(userName.value)) {
        saveUserLocalStorage(users);
        window.location.href = "../2-login/2-login.html";
        console.log(userName.value);
    }
    else {
        alert("userName not Available");
    }
}
function isUserNameAvailable(userName) {
    var users = JSON.parse(localStorage.getItem("user") || "[]");
    var isUserNameAvailable = [];
    users.filter(function (user) { return user.userName == userName; }).length == 0;
    return isUserNameAvailable;
}
function saveUserLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
function getUserLocalStorage() {
    return JSON.parse(localStorage.getItem("user") || "[]");
}
// function signUpBtn(user: User[]) {
//   localStorage.setItem("user", JSON.stringify(user));
//   window.location.href = "../1-index.html";
// }
