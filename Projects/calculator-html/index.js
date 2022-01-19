let numb = [];
let num2;
let storage;
let operator;
let result;
let reop = 0;
const display = document.getElementById("display");

window.onload = function () {
  const display = document.getElementById("display");
};
function equal() {
  if (operator === "+") {
    if (numb.length === 0) {
      numb = 0;
    }
    result = parseFloat(num2) + parseFloat(numb);
  } else if (operator === "-") {
    if (numb.length === 0) {
      numb = 0;
    }
    result = parseFloat(num2) - parseFloat(numb);
  } else if (operator === "x") {
    if (numb.length === 0) {
      numb = 0;
    }
    result = parseFloat(num2) * parseFloat(numb);
  } else if (operator === "/") {
    if (numb.length === 0) {
      numb = 0;
    }
    result = parseFloat(num2) / parseFloat(numb);
  }
  function number(n) {
    display.innerHTML += n;
    numb += n;
    storage = numb;
  }
  function operation(o) {
    if (!Number.isNaN(storage) && result != null && reop < 1) {
      num2 = parseFloat(result);
      numb = [];
      operator = o;
      display.innerHTML += operator;
      reop = 0;
    } else if (operator !== undefined) {
      equal(operator);
      operator = o;
      num2 = result;
      display.innerHTML += operator;
      reop = 1;
    } else {
      num2 = parseFloat(numb);
      numb = [];
      operator = o;
      display.innerHTML += operator;
      reop = 1;
    }
  }

  display.innerHTML = parseFloat(result);
  storage = parseFloat(result);
  numb = [];
  num2 = result;
}

function squarer() {
  if (!Number.isNaN(storage)) {
    display.innerHTML = Math.sqrt(storage);
  } else {
    display.innerHTML = Math.sqrt(numb);
  }
}

function clears() {
  display.innerHTML = null;
  storage = null;
  numb = [];
  num2 = null;
  result = null;
  operator = undefined;
}
