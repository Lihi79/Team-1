// helper
// ---------
function uid(): string {
  return `id- ${Math.random()}`;
}

function getUserLocalStorage() {
  return JSON.parse(localStorage.getItem("user") || "[]");
}

function saveUserLocalStorage(user: User[]) {
  localStorage.setItem("user", JSON.stringify(user));
}
