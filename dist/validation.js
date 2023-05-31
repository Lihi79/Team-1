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
