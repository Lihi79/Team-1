var button = document.querySelector("#button");
var option = document.querySelector("#dropdown");
button.addEventListener("click", function (e) {
    e.preventDefault();
    handelHidden();
});
function handelHidden() {
    option.classList.toggle("hidden");
}
