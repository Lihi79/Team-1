var signUpBtn = document.querySelector(".singUpBtn");
var singInBtn = document.querySelector(".singInBtn");
var nameField = document.querySelector("#nameField");
var title = document.querySelector("#title");
singInBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sing In";
    signUpBtn.classList.add("disable");
    singInBtn.classList.remove("disable");
};
// signUpBtn.onclick = function () {
//   nameField.style.maxHeight = "60px";
//   title.innerHTML = `Sing Up`;
//   signUpBtn.classList.remove("disable");
//   singInBtn.classList.add("disable");
// };
// singInBtn.addEventListener("click", (e) => {
//   nameField.style.maxHeight = "0";
// });
// const btnField: NodeListOf<HTMLDivElement> = document.querySelectorAll(
//   ".btnField__singUp, .btnField__singIn,"
// );
// btnField.forEach((boxi) => {
//   boxi.addEventListener("click", (eve) => {
//     nameField.style.maxHeight = "0";
//   });
// });
// btnField.onclick = function () {
//   nameField.style.maxHeight = "0";
// };
// btnField.forEach((box) => {
//   box.addEventListener("click", (eve) => {
//     singInBtn.innerHTML = nameField.style.maxHeight = "0";
//   });
// });
