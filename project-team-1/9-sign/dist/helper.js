// helper
// ---------
function uid() {
    return "id- " + Math.random();
}
// helper
// ---------
function saveUserLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
function getUserLocalStorage() {
    return JSON.parse(localStorage.getItem("user") || "[]");
}
