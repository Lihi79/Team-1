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
// controller
// ------------
function comparePassword(password, comparePassword) {
    var isPasswordValid = password == comparePassword ? true : false;
    return isPasswordValid;
}
// view
// --------
var signUpButton = document.getElementById("signUp");
// controller
// ------------
signUpButton === null || signUpButton === void 0 ? void 0 : signUpButton.addEventListener("click", function (event) {
    signUp(event);
});
// controller
// ------------
function signUp(evt) {
    evt.preventDefault();
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("cpass");
    users.push(new User(userName.value, email.value, password.value, confirmPassword.value));
    if (!comparePassword(password.value, confirmPassword.value)) {
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
    console.log(users);
    var isUserNameAvailable = users.filter(function (user) { return user.userName == userName; }).length == 0;
    console.log(users.filter(function (user) { return user.userName == userName; }));
    return isUserNameAvailable;
}
// helper
// ---------
function saveUserLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
function getUserLocalStorage() {
    return JSON.parse(localStorage.getItem("user") || "[]");
}
// controller
// ------------
// function signUpBtn(user: User[]) {
//   console.log("hello");
//   localStorage.setItem("user", JSON.stringify(user));
//   window.location.href = "../1-index.html";
// }
