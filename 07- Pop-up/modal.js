const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

const openClick = function () {
  popup.classList.add("d-block");
};
const eventModal = function (event) {
  const ClickOfElement = event.target.classList[0];
  const clasNameListArray = ["popup-close", "popup-link", "popup-wrapper"];

  const isClassList = clasNameListArray.includes(ClickOfElement);

  if (isClassList) {
    popup.classList.remove("d-block");
  }
};

button.addEventListener("click", openClick);
popup.addEventListener("click", eventModal);
