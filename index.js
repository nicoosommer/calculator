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
let num1 = 0;
let operator = 0;
let num2 = 0;

function operate(a, b, op) {
  if (op == "+") return add(a, b);
  if (op == "-") return subtract(a, b);
  if (op == "*") return multiply(a, b);
  if (op == "/") return divide(a, b);
}

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".nmbs");
const ac = document.querySelector("#ac");
const punto = document.querySelector(".punto");
const masmenos = document.querySelector("#masmenos");
const borrar = document.querySelector(".borrar");

for (num of nums) {
  num.addEventListener("click", (e) => {
    display.textContent += e.target.innerText;
  });
}
ac.addEventListener("click", () => {
  display.textContent = "";
});
punto.addEventListener("click", (e) => {
  const arr = display.textContent.split("");
  if (arr.includes(".") === true) return;
  display.textContent += e.target.innerText;
});
borrar.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});

masmenos.addEventListener("click", () => {
  if (display.textContent[0] !== "-") {
    display.textContent = "-" + display.textContent;
  } else {
    display.textContent = display.textContent.slice(1);
  }
});
function operadores() {
  num1 = Number(display.textContent);
  operator = e.target.innerText;
  display.textContent = "";
}
const oprs = document.querySelectorAll(".oprs");
for (let i = 0; i < oprs.length; i++) {
  oprs[i].addEventListener("click", (e) => {
    num1 = Number(display.textContent);
    operator = e.target.innerText;
    display.textContent = "";
  });
}

const igual = document.querySelector("#igual");
igual.addEventListener("click", () => {
  num2 = Number(display.textContent);
  display.textContent = operate(num1, num2, operator);
});
