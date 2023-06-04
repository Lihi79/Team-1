// helper
// ---------
function uid() {
    return "id- " + Math.random();
}
function saveRegisterUserLocalStorage(registerUser) {
    localStorage.setItem("registerUser", JSON.stringify(registerUser));
}
