const selected = document.querySelector(".selected") as HTMLElement;
const optionsContainer = document.querySelector(
  ".options-container"
) as HTMLElement;
const optionList: NodeListOf<HTMLElement> =
  document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});
optionList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label")?.innerHTML;
    optionsContainer.classList.remove("active");
  });
});
