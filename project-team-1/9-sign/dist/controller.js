// controller
// ------------
function comparePassword(password, comparePassword) {
    var isPasswordValid = password == comparePassword ? true : false;
    return isPasswordValid;
}
var signUpButton = document.getElementById("signUp");
signUpButton === null || signUpButton === void 0 ? void 0 : signUpButton.addEventListener("click", function (event) {
    signUp(event);
});
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
    // console.log(users);
    var isUserNameAvailable = users.filter(function (user) { return user.userName == userName; }).length == 0;
    console.log(users.filter(function (user) { return user.userName == userName; }));
    return isUserNameAvailable;
}
function signUpBtn(user) {
    // console.log("hello");
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "../1-index.html";
}
