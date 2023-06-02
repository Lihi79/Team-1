const userRender2 = document.getElementById("userRender") as HTMLElement;
const userNameValue = localStorage.getItem("userName") || "";
userRender2!.innerHTML = userNameValue;

hideBtns();
function DisconnectedUser() {
  localStorage.setItem("userName", "");
}
function hideBtns() {
  const signIn = document.getElementById("signIn") as HTMLElement;
  const Disconnected = document.getElementById("Disconnected") as HTMLElement;
  const createBlog = document.getElementById("createBlog") as HTMLAnchorElement;

  const isUserLogged = localStorage.getItem("userName") || ""!.length > 0;
  if (isUserLogged) {
    signIn.classList.add("none");

    createBlog.href = "../10-edit-screen/10-edit-screen.html";
    /////מערך של כל המחלקות של התגית
  } else Disconnected.classList.add("none");
  ////להסויף את זה לכל המוקמות שצריך לא לשכוח להוסיף גם את המחלקה של נאן
}
