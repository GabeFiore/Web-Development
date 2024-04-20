const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

const openClick = function(){poupup.classList.add('d-block');}
const eventModal = function(event) {
    const ClickOfElement = event.target.classList[0];
    const clasNameListArray = ["popup-close", "poupup-link", "poupup-wrapper"];

    const isClassList = clasNameListArray.includes(ClickOfElement);
  
    if(isClassList) {
      poupup.classList.remove('d-block');
    }
}

button.addEventListener("click", openClick);
poupup.addEventListener("click", eventModal);