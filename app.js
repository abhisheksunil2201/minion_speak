const inputField = document.querySelector(".input");
const outputField = document.querySelector(".output");
const btn = document.querySelector(".btn");

const api = "https://api.funtranslations.com/translate/minion.json";

function createRequest(translateText) {
  return `${api}?text=${translateText}`;
}

function handleError(error) {
  outputField.style.color = "red";
  outputField.style.fontSize = "1.5em";
  outputField.innerText = "An error has occured. Please try again later.";
  console.log("An error occured:" + error);
}

function translateText() {
  let request = createRequest(inputField.value);

  fetch(request)
    .then((res) => res.json())
    .then((data) => {
      outputField.innerText = data.contents.translated;
    })
    .catch(handleError);
}

btn.addEventListener("click", translateText);
