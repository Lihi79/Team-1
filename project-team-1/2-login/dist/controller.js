// model
// -----------
var RegisteredUser = /** @class */ (function () {
    function RegisteredUser(loginName, loginPassword) {
        this.loginName = loginName;
        this.loginPassword = loginPassword;
        this.uid = uid();
    }
    return RegisteredUser;
}());
var registerUsersArray = [];
// helper
// ---------
function uid() {
    return "id- " + Math.random();
}
// view
// --------
var userRender = document.querySelector("#userRender");
var signInBtn = document.getElementById("btnField__singUpBtn");
// controller
// ---------------
signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.addEventListener("click", function (event) {
    signIn(event);
});
function signIn(evt) {
    evt.preventDefault();
    var loginName = document.getElementById("loginName");
    var loginPassword = document.getElementById("loginPassword");
    registerUsersArray.push(new RegisteredUser(loginName.value, loginPassword.value));
    if (isValidInfo(loginName.value, loginPassword.value)) {
        alert("Successfully logged in");
        localStorage.setItem("userName", loginName.value);
        window.location.href = "../1-home/1-index.html";
    }
    else {
        alert("No user found. Try again");
    }
}
function isValidInfo(userName, Password) {
    var users = JSON.parse(localStorage.getItem("user") || "[]");
    var arrayOfUsers = users.filter(function (user) { return user.password == Password && user.userName == userName; });
    var isArrayIsntEmpty = arrayOfUsers.length > 0;
    var isValidInfo = isArrayIsntEmpty;
    return isValidInfo;
}
