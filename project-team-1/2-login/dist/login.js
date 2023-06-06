// @import (Swal from "sweetalert2");
// // model
// // --------
// class RegisteredUser {
//   uid: string;
//   constructor(public loginName: string, public loginPassword: string) {
//     this.uid = uid();
//   }
// }
// const registerUsersArray: RegisteredUser[] = [];
// // helper
// // ---------
// function uid(): string {
//   return `id- ${Math.random()}`;
// }
// view
// --------
// const userRender = document.querySelector("#userRender") as HTMLDivElement;
var signInBtn = document.getElementById("btnField__singUpBtn");
// controller
// ------------
signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.addEventListener("click", function (event) {
    signIn(event);
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
        // swal("Good job!", "Successfully logged in!", "success");
        window.location.href = "../1-home/1-index.html";
        localStorage.setItem("userName", loginName.value);
    }
    else {
        alert("No user found. Try again");
        // swal("Opps!", "No user found. Try again!", "error");
    }
    saveRegisterUserLocalStorage(registerUsersArray);
    console.log(loginName.value);
}
function isValidInfo(userName, Password) {
    var users = JSON.parse(localStorage.getItem("user") || "[]");
    var isValidInfo = users.filter(function (user) { return user.password == Password && user.userName == userName; }).length > 0;
    return isValidInfo;
}
// helper
// ---------
// function saveRegisterUserLocalStorage(registerUser: RegisteredUser[]) {
//   localStorage.setItem("registerUser", JSON.stringify(registerUser));
// }
// controller
// ------------
function signIpBtn(registerUser) {
    console.log("hello");
    localStorage.setItem("registerUser", JSON.stringify(registerUser));
    window.location.href = "../1-index.html";
}
// controller
// ------------
function renderRegisterUser(registerUsersArray) {
    var html2 = registerUsersArray
        .map(function (us) {
        return "\n        <div class=\"container\">\n          <div class=\"user\">\n            <div class=\"name\">\n               <h1 class=\"blog__title\" id=\"title\">" + us.loginName + "</h1>\n              </div>\n            </div>\n          </div>\n      ";
    })
        .join(" ");
    userRender.innerHTML = html2;
    return html2;
}
