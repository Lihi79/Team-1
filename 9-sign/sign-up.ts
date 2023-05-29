function signUp(evt) {
  evt.preventDefault();
  console.log("evt!!!!!!!!!!!!!!!!!");

  const userName = evt.target.elements.userName.value;
  const password = evt.target.elements.password.value;
  const email = evt.target.elements.email.value;
  users.push(new User(userName, password, email));
  saveUserLocalStorage(users);
  console.log(userName.value);
}

function saveUserLocalStorage(user: User[]) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserLocalStorage(): User[] | undefined {
  const getLcPart1 = localStorage.getItem("user");
  if (!getLcPart1) throw new Error("get Local Storage is null");
  const getLcPart2 = JSON.parse(getLcPart1);
  return getLcPart2;
}

function signUpBtn(user: User[]) {
  console.log("hello");

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../1-index.html";
}
