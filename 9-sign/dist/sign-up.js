function signUp(evt) {
    console.log("evt!!!!!!!!!!!!!!!!!");
    var userName = evt.target.elements.userName.value;
    var password = evt.target.elements.password.value;
    var email = evt.target.elements.email.value;
    users.push(new User(userName, password, email));
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