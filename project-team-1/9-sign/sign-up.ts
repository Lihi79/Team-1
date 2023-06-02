// user sign up
// הרשמות לאתר

class User {
  uid: string;
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public cpass: string
  ) {
    this.uid = uid();
  }
}

const users: User[] = getUserLocalStorage();

function uid(): string {
  return `id- ${Math.random()}`;
}

///function const letשם (פרמטרים=מה שאני מעביר לפונקציה משתנים ואני לא צריך להגדיר את  שלהם){}
function comparePassword(password, comparePassword) {
  const isPasswordValid = password == comparePassword ? true : false;

  /////opertor trenay
  return isPasswordValid;
}

const signUpButton = document.getElementById("signUp") as HTMLElement;
signUpButton?.addEventListener("click", (event) => {
  signUp(event);
  alert("ËDEDEDED");
});

function signUp(evt) {
  evt.preventDefault();

  const userName = document.getElementById("userName") as HTMLInputElement;

  const email = document.getElementById("email") as HTMLInputElement;

  const password = document.getElementById("password") as HTMLInputElement;

  const confirmPassword = document.getElementById("cpass") as HTMLInputElement;

  users.push(
    new User(userName.value, email.value, password.value, confirmPassword.value)
  );
  ///ארגומנטים שזה בעצם המשתנים שאני מעבירים לתוך הפונקציה

  if (!comparePassword(password.value, confirmPassword.value)) {
    alert("the 2 of the password need to be matched");
    return;
  }
  /////return עוצר את הפונקציה מלהמשיך
  /////

  if (isUserNameAvailable(userName.value)) {
    saveUserLocalStorage(users);
    window.location.href = "../2-login/2-login.html";
    console.log(userName.value);
  } else {
    alert("userName not Available");
  }
}

function isUserNameAvailable(userName) {
  /////מערך של יוזרים
  /////json parse הופך מסטרינג לדבר האימיתי
  /////json stirngfy הופך לסטרינג
  /////object object
  //////|| אופרטור שאם צד שמאל שלו הוא אנדיפיינד לא קיים אז הוא הולך למה שקורה בצד ימין
  //////
  const users = JSON.parse(localStorage.getItem("user") || "[]");
  ///בדיקה האם היוזר קיים
  console.log(users);
  const isUserNameAvailable =
    users.filter((user) => user.userName == userName).length == 0;
  console.log(users.filter((user) => user.userName == userName));
  return isUserNameAvailable;
}
function saveUserLocalStorage(user: User[]) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserLocalStorage() {
  return JSON.parse(localStorage.getItem("user") || "[]");
}

function signUpBtn(user: User[]) {
  console.log("hello");

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../1-index.html";
}
