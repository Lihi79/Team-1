// helper
// ---------
function uid(): string {
  return `id- ${Math.random()}`;
}

// helper
// ---------
function saveUserLocalStorage(user: User[]) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserLocalStorage() {
  return JSON.parse(localStorage.getItem("user") || "[]");
}
