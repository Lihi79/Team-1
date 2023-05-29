const selected: any = document.querySelector(".selected") as HTMLElement;
const optionsContainer = document.querySelector(
  ".options-container"
) as HTMLElement;
const optionList: NodeListOf<HTMLElement> =
  document.querySelectorAll(".option");

selected.addEventListener("click", (event) => {
  optionsContainer.classList.toggle("active");
});
optionList.forEach((o) => {
  o.addEventListener("click", (event) => {
    selected.innerHTML = o.querySelector("label")?.innerHTML;
    optionsContainer.classList.remove("active");
  });
});
