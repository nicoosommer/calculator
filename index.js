//FUNCIONES BASICAS//
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return a ** b;
}
let num1 = null;
let operator = null;
let num2 = null;

function operate(a, b, op) {
  if (op == "+") return add(a, b);
  if (op == "-") return subtract(a, b);
  if (op == "*") return multiply(a, b);
  if (op == "/") return divide(a, b);
  if (op == "^") return power(a, b);
}

const display = document.querySelector(".display");
const arriba = document.querySelector(".arriba");
const abajo = document.querySelector(".abajo");
const nums = document.querySelectorAll(".nmbs");
const ac = document.querySelector("#ac");
const punto = document.querySelector(".punto");
const masmenos = document.querySelector("#masmenos");
const borrar = document.querySelector(".borrar");

for (num of nums) {
  num.addEventListener("click", (e) => {
    arriba.textContent += e.target.innerText;
    abajo.textContent += e.target.innerText;
  });
}
ac.addEventListener("click", () => {
  arriba.textContent = "";
  num1 = null;
  num2 = null;
  operator = null;
});
punto.addEventListener("click", (e) => {
  const arr = arriba.textContent.split("");
  if (arr.includes(".") === true) return;
  arriba.textContent += e.target.innerText;
});
borrar.addEventListener("click", () => {
  arriba.textContent = arriba.textContent.slice(0, -1);
});

masmenos.addEventListener("click", () => {
  if (arriba.textContent[0] !== "-") {
    arriba.textContent = "-" + arriba.textContent;
  } else {
    arriba.textContent = arriba.textContent.slice(1);
  }
});
const oprs = document.querySelectorAll(".oprs");
for (let i = 0; i < oprs.length; i++) {
  oprs[i].addEventListener("click", (e) => {
    abajo.textContent += e.target.innerText;
    if (num1 !== null) {
      num2 = Number(arriba.textContent);
      num1 = operate(num1, num2, operator);
      operator = e.target.innerText;
      arriba.textContent = "";
    } else {
      num1 = Number(arriba.textContent);
      operator = e.target.innerText;
      arriba.textContent = "";
    }
  });
}

const igual = document.querySelector("#igual");
igual.addEventListener("click", () => {
  num2 = Number(arriba.textContent);
  arriba.textContent = operate(num1, num2, operator);
  num1 = null;
  num2 = null;
  operator = null;
});
