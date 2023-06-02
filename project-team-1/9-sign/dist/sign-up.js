// user sign up
// הרשמות לאתר
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
var users = getUserLocalStorage() || [];
function uid() {
    return "id- " + Math.random();
}
///function const letשם (פרמטרים=מה שאני מעביר לפונקציה משתנים ואני לא צריך להגדיר את  שלהם){}
function comparePassword(password, comparePassword) {
    var isPasswordValid = password == comparePassword ? true : false;
    /////opertor trenay
    return isPasswordValid;
}
var signUpButton = document.getElementById("signUp");
signUpButton === null || signUpButton === void 0 ? void 0 : signUpButton.addEventListener("click", function (event) {
    signUp(event);
    alert("ËDEDEDED");
});
function signUp(evt) {
    evt.preventDefault();
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("cpass");
    users.push(new User(userName.value, email.value, password.value, confirmPassword.value));
    ///ארגומנטים שזה בעצם המשתנים שאני מעבירים לתוך הפונקציה
    if (!comparePassword(password.value, confirmPassword.value)) {
        alert("the 2 of the password need to be matched");
        return;
    }
    /////return עוצר את הפונקציה מלהמשיך
    /////
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
    /////מערך של יוזרים
    var users = JSON.parse(localStorage.getItem("user") || "");
    ///בדיקה האם היוזר קיים
    console.log(users);
    var isUserNameAvailable = users.filter(function (user) { return user.userName == userName; }).length == 0;
    console.log(users.filter(function (user) { return user.userName == userName; }));
    return isUserNameAvailable;
}
function saveUserLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
function getUserLocalStorage() {
    var getLcPart1 = localStorage.getItem("user");
    if (!getLcPart1)
        throw new Error("get Local Storage is null");
    var getLcPart2 = JSON.parse(getLcPart1);
    return getLcPart2;
}
function signUpBtn(user) {
    console.log("hello");
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "../1-index.html";
}
