class RegisteredUser {
  uid: string;
  constructor(public loginName: string, public loginPassword: string) {
    this.uid = uid();
  }
}

const registerUsersArray: RegisteredUser[] = [];

function uid(): string {
  return `id- ${Math.random()}`;
}

const userRender = document.querySelector("#userRender") as HTMLDivElement;
const signInBtn = document.getElementById(
  "btnField__singUpBtn"
) as HTMLInputElement;
signInBtn?.addEventListener("click", (event) => {
  signIn(event);
  alert("ËDEDEDED");
});
function signIn(evt) {
  evt.preventDefault();
  // Swal.fire("Good job!", "You clicked the button!");
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
    window.location.href = "../1-home/1-index.html";
    localStorage.setItem("userName", loginName.value);
  } else {
    alert("No user found. Try again ");
  }

  saveRegisterUserLocalStorage(registerUsersArray);
  console.log(loginName.value);
}
function isValidInfo(userName, Password) {
  const users = JSON.parse(localStorage.getItem("user") || "[]");

  const isValidInfo =
    users.filter(
      (user) => user.password == Password && user.userName == userName
    ).length > 0;

  return isValidInfo;
}

function saveRegisterUserLocalStorage(registerUser: RegisteredUser[]) {
  localStorage.setItem("registerUser", JSON.stringify(registerUser));
}

function signIpBtn(registerUser: RegisteredUser[]) {
  console.log("hello");

  localStorage.setItem("registerUser", JSON.stringify(registerUser));
  window.location.href = "../1-index.html";
}

function renderRegisterUser(registerUsersArray: RegisteredUser[]): string {
  const html2: string = registerUsersArray
    .map((us) => {
      return `    
        <div class="container">
          <div class="user">
            <div class="name">
               <h1 class="blog__title" id="title">${us.loginName}</h1>
              </div>
            </div>
          </div>
      `;
    })
    .join(" ");

  userRender.innerHTML = html2;

  return html2;
}
