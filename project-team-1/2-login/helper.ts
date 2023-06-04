// helper
// ---------
function uid(): string {
  return `id- ${Math.random()}`;
}

function saveRegisterUserLocalStorage(registerUser: RegisteredUser[]) {
  localStorage.setItem("registerUser", JSON.stringify(registerUser));
}
