var userRender2 = document.getElementById("userRender");
var userNameValue = localStorage.getItem("userName") || "";
userRender2.innerHTML = userNameValue;
hideBtns();
function DisconnectedUser() {
    localStorage.setItem("userName", "");
}
function hideBtns() {
    var signIn = document.getElementById("signIn");
    var Disconnected = document.getElementById("Disconnected");
    var createBlog = document.getElementById("createBlog");
    var isUserLogged = localStorage.getItem("userName") || "".length > 0;
    if (isUserLogged) {
        signIn.classList.add("none");
        createBlog.href = "../10-edit-screen/10-edit-screen.html";
        /////מערך של כל המחלקות של התגית
    }
    else
        Disconnected.classList.add("none");
    ////להסויף את זה לכל המוקמות שצריך לא לשכוח להוסיף גם את המחלקה של נאן
}
