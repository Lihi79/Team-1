// model
// -----------
class RegisteredUser {
  uid: string;
  constructor(public loginName: string, public loginPassword: string) {
    this.uid = uid();
  }
}

const registerUsersArray: RegisteredUser[] = [];

// helper
// ---------
function uid(): string {
  return `id- ${Math.random()}`;
}

// view
// --------
const userRender = document.querySelector("#userRender") as HTMLDivElement;
const signInBtn = document.getElementById(
  "btnField__singUpBtn"
) as HTMLInputElement;

// controller
// ---------------

signInBtn?.addEventListener("click", (event) => {
  signIn(event);
});

function signIn(evt) {
  evt.preventDefault();

  const loginName = document.getElementById("loginName") as HTMLInputElement;
  const loginPassword = document.getElementById(
    "loginPassword"
  ) as HTMLInputElement;

  registerUsersArray.push(
    new RegisteredUser(loginName.value, loginPassword.value)
  );

  if (isValidInfo(loginName.value, loginPassword.value)) {
    alert("Successfully logged in");

    localStorage.setItem("userName", loginName.value);

    window.location.href = "../1-home/1-index.html";
  } else {
    alert("No user found. Try again");
  }
}

function isValidInfo(userName, Password) {
  const users = JSON.parse(localStorage.getItem("user") || "[]");

  const arrayOfUsers = users.filter(
    (user) => user.password == Password && user.userName == userName
  );

  const isArrayIsntEmpty = arrayOfUsers.length > 0;

  const isValidInfo = isArrayIsntEmpty;

  return isValidInfo;
}
