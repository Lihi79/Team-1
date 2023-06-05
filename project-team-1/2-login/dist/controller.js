var RegisteredUser = /** @class */ (function () {
    function RegisteredUser(loginName, loginPassword) {
        this.loginName = loginName;
        this.loginPassword = loginPassword;
        this.uid = uid();
    }
    return RegisteredUser;
}());
var registerUsersArray = [];
function uid() {
    return "id- " + Math.random();
}
var userRender = document.querySelector("#userRender");
var signInBtn = document.getElementById("btnField__singUpBtn");
signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.addEventListener("click", function (event) {
    signIn(event);
    alert("ËDEDEDED");
});
function signIn(evt) {
    evt.preventDefault();
    // Swal.fire("Good job!", "You clicked the button!");
    evt.preventDefault();
    var loginName = document.getElementById("loginName");
    var loginPassword = document.getElementById("loginPassword");
    registerUsersArray.push(new RegisteredUser(loginName.value, loginPassword.value));
    if (isValidInfo(loginName.value, loginPassword.value)) {
        alert("Successfully logged in");
        window.location.href = "../1-home/1-index.html";
        localStorage.setItem("userName", loginName.value);
    }
    else {
        alert("No user found. Try again ");
    }
    saveRegisterUserLocalStorage(registerUsersArray);
    console.log(loginName.value);
}
function isValidInfo(userName, Password) {
    var users = JSON.parse(localStorage.getItem("user") || "[]");
    var isValidInfo = users.filter(function (user) { return user.password == Password && user.userName == userName; }).length > 0;
    return isValidInfo;
}
function saveRegisterUserLocalStorage(registerUser) {
    localStorage.setItem("registerUser", JSON.stringify(registerUser));
}
function signIpBtn(registerUser) {
    console.log("hello");
    localStorage.setItem("registerUser", JSON.stringify(registerUser));
    window.location.href = "../1-index.html";
}
function renderRegisterUser(registerUsersArray) {
    var html2 = registerUsersArray
        .map(function (us) {
        return "    \n        <div class=\"container\">\n          <div class=\"user\">\n            <div class=\"name\">\n               <h1 class=\"blog__title\" id=\"title\">" + us.loginName + "</h1>\n              </div>\n            </div>\n          </div>\n      ";
    })
        .join(" ");
    userRender.innerHTML = html2;
    return html2;
}
