// // model
// // --------
// class User {
//   uid: string;
//   constructor(
//     public userName: string,
//     public email: string,
//     public password: string,
//     public cpass: string
//   ) {
//     this.uid = uid();
//   }
// }
// const users: User[] = [];
// // helper
// // ---------
// function uid(): string {
//   return `id- ${Math.random()}`;
// }
// function isPasswordCompared(password, comparePassword) {
//   const isPasswordValid = password == comparePassword ? true : false;
//   return isPasswordValid;
// }
// // view
// // --------
// const signUpButton = document.getElementById("signUpBtn") as HTMLElement;
// // controller
// // ---------------
// signUpButton?.addEventListener("click", (event) => {
//   signUp(event);
// });
// function signUp(evt) {
//   evt.preventDefault();
//   const userName = document.getElementById("userName") as HTMLInputElement;
//   const email = document.getElementById("email") as HTMLInputElement;
//   const password = document.getElementById("password") as HTMLInputElement;
//   const confirmPassword = document.getElementById("cpass") as HTMLInputElement;
//   if (
//     userName.value.length == 0 ||
//     email.value.length == 0 ||
//     confirmPassword.value.length == 0
//   ) {
//     alert("you need to fill all the fields!!!");
//     return false;
//   }
//   users.push(
//     new User(userName.value, email.value, password.value, confirmPassword.value)
//   );
//   if (!isPasswordCompared(password.value, confirmPassword.value)) {
//     alert("the 2 of the password need to be matched");
//     return;
//   }
//   if (isUserNameAvailable(userName.value)) {
//     saveUserLocalStorage(users);
//     window.location.href = "../2-login/2-login.html";
//     console.log(userName.value);
//   } else {
//     alert("userName not Available");
//   }
// }
// function isUserNameAvailable(userName) {
//   const users = JSON.parse(localStorage.getItem("user") || "[]");
//   const isUserNameAvailable = [];
//   users.filter((user) => user.userName == userName).length == 0;
//   return isUserNameAvailable;
// }
// function saveUserLocalStorage(user: User[]) {
//   localStorage.setItem("user", JSON.stringify(user));
// }
// function getUserLocalStorage() {
//   return JSON.parse(localStorage.getItem("user") || "[]");
// }
// function signUpBtn(user: User[]) {
//   localStorage.setItem("user", JSON.stringify(user));
//   window.location.href = "../1-index.html";
// }
