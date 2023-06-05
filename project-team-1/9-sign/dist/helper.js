// helper
// ---------
function uid() {
    return "id- " + Math.random();
}
function getUserLocalStorage() {
    return JSON.parse(localStorage.getItem("user") || "[]");
}
function saveUserLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
