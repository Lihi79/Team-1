// // @import (Swal from "sweetalert2");
// // model
// // --------
// class RegisteredUser {
//   uid: string;
//   constructor(public loginName: string, public loginPassword: string) {
//     this.uid = uid();
//   }
// }
// const registerUsersArray: RegisteredUser[] = [];
// // helper
// // ---------
// function uid(): string {
//   return `id- ${Math.random()}`;
// }
// // view
// // --------
// const userRender = document.querySelector("#userRender") as HTMLDivElement;
// const signInBtn = document.getElementById(
//   "btnField__singUpBtn"
// ) as HTMLInputElement;
// // controller
// // ------------
// signInBtn?.addEventListener("click", (event) => {
//   signIn(event);
// });
// function signIn(evt) {
//   evt.preventDefault();
//   // Swal.fire("Good job!", "You clicked the button!");
//   evt.preventDefault();
//   const loginName = document.getElementById("loginName") as HTMLInputElement;
//   const loginPassword = document.getElementById(
//     "loginPassword"
//   ) as HTMLInputElement;
//   registerUsersArray.push(
//     new RegisteredUser(loginName.value, loginPassword.value)
//   );
//   if (isValidInfo(loginName.value, loginPassword.value)) {
//     alert("Successfully logged in");
//     // swal("Good job!", "Successfully logged in!", "success");
//     window.location.href = "../1-home/1-index.html";
//     localStorage.setItem("userName", loginName.value);
//   } else {
//     alert("No user found. Try again");
//     // swal("Opps!", "No user found. Try again!", "error");
//   }
//   saveRegisterUserLocalStorage(registerUsersArray);
//   console.log(loginName.value);
// }
// function isValidInfo(userName, Password) {
//   const users = JSON.parse(localStorage.getItem("user") || "[]");
//   const isValidInfo =
//     users.filter(
//       (user) => user.password == Password && user.userName == userName
//     ).length > 0;
//   return isValidInfo;
// }
// // helper
// // ---------
// // function saveRegisterUserLocalStorage(registerUser: RegisteredUser[]) {
// //   localStorage.setItem("registerUser", JSON.stringify(registerUser));
// // }
// // controller
// // ------------
// function signIpBtn(registerUser: RegisteredUser[]) {
//   console.log("hello");
//   localStorage.setItem("registerUser", JSON.stringify(registerUser));
//   window.location.href = "../1-index.html";
// }
// // controller
// // ------------
// function renderRegisterUser(registerUsersArray: RegisteredUser[]): string {
//   const html2: string = registerUsersArray
//     .map((us) => {
//       return `
//         <div class="container">
//           <div class="user">
//             <div class="name">
//                <h1 class="blog__title" id="title">${us.loginName}</h1>
//               </div>
//             </div>
//           </div>
//       `;
//     })
//     .join(" ");
//   userRender.innerHTML = html2;
//   return html2;
// }
