var selected = document.querySelector(".selected");
var optionsContainer = document.querySelector(".options-container");
var optionList = document.querySelectorAll(".option");
selected.addEventListener("click", function (event) {
    optionsContainer.classList.toggle("active");
});
optionList.forEach(function (o) {
    o.addEventListener("click", function (event) {
        var _a;
        selected.innerHTML = (_a = o.querySelector("label")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        optionsContainer.classList.remove("active");
    });
});
