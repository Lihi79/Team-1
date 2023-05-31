var submitButton = document.querySelector(".btnField__singUp");
submitButton.onclick = function (e) {
    e.preventDefault();
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpass = document.getElementById("cpass").value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("Cpassword", cpass);
    if (userName == "" || email == "" || password == "" || cpass == "") {
        alert("input field has no value");
    }
    else {
        if (password !== cpass) {
            alert("password not matching");
        }
        else {
            alert("registration succeeded");
        }
    }
};
var login = document.querySelector(".login");
login.onclick = function (e) {
    e.preventDefault();
    var loginName = document.getElementById("loginName").value;
    var loginPassword = document.getElementById("loginPassword").value;
    var nameUser = localStorage.getItem("userName");
    var passwordUser = localStorage.getItem("password");
    if (loginName == "" || loginPassword == "") {
        alert("input field has no value");
    }
    else {
        if (loginName == nameUser && loginPassword == passwordUser) {
            alert("welcome back");
        }
        else {
            alert("Something is wrong! ' try again");
        }
    }
};
