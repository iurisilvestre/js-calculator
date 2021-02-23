// Import stylesheets
import "./style.css";

//Globals
let inputString = "";

// DOM
const prevResult = document.querySelector("#prev-operation");
const currentResult = document.querySelector("#operation");
const allButtons = document.querySelectorAll("button");
const resultBtn = document.querySelector("#equal");
const resetBtn = document.querySelector("#reset");

function result() {
  if (inputString === "") {
    currentResult.innerHTML = "0";
  } else {
    inputString = eval(inputString);
    currentResult.innerHTML = inputString;
  }
}

function allClear() {
  inputString = "";
  currentResult.innerHTML = "0";
}

allButtons.forEach(item => {
  item.addEventListener("click", function(e) {
    inputString += e.target.value;
    currentResult.innerHTML = inputString
      .replace(/\*/g, "&times")
      .replace(/\//g, "&divide");
  });
});

//Events
resultBtn.addEventListener("click", result);
resetBtn.addEventListener("click", allClear);
