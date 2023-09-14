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

function agregarNum(e) {
  let target = 0;
  if (e.key === undefined) {
    target = e.target.innerText;
  } else {
    target = e.key;
  }
  if (arriba.textContent.length <= 60) arriba.textContent += target;
  if (abajo.textContent.length <= 30) abajo.textContent += target;
}
for (num of nums) {
  num.addEventListener("click", agregarNum);
}
ac.addEventListener("click", () => {
  arriba.textContent = "";
  abajo.textContent = "";
  num1 = null;
  num2 = null;
  operator = null;
});
punto.addEventListener("click", (e) => {
  const arr = arriba.textContent.split("");
  if (arr.includes(".") === true) return;
  arriba.textContent += e.target.innerText;
});
function borrarr() {
  arriba.textContent = arriba.textContent.slice(0, -1);
  abajo.textContent = abajo.textContent.slice(0, -1);
}
borrar.addEventListener("click", borrarr);

masmenos.addEventListener("click", () => {
  if (arriba.textContent[0] !== "-") {
    arriba.textContent = "-" + arriba.textContent;
  } else {
    arriba.textContent = arriba.textContent.slice(1);
  }
});
const oprs = document.querySelectorAll(".oprs");
function operadores(e) {
  const evalu = abajo.textContent[abajo.textContent.length - 1];
  if (
    evalu === "+" ||
    evalu === "-" ||
    evalu === "*" ||
    evalu === "/" ||
    evalu === "^"
  )
    return;
  let target = 0;
  if (e.key === undefined) {
    target = e.target.innerText;
  } else {
    target = e.key;
  }
  abajo.textContent += target;
  if (num1 !== null) {
    num2 = Number(arriba.textContent);
    num1 = operate(num1, num2, operator);
    operator = target;
    arriba.textContent = "";
  } else {
    num1 = Number(arriba.textContent);
    operator = target;
    arriba.textContent = "";
  }
}
for (let i = 0; i < oprs.length; i++) {
  oprs[i].addEventListener("click", operadores);
}

const igual = document.querySelector("#igual");
function equal() {
  num2 = Number(arriba.textContent);
  arriba.textContent = operate(num1, num2, operator);
  abajo.textContent = arriba.textContent;
  num1 = null;
  num2 = null;
  operator = null;
}
igual.addEventListener("click", equal);

//SOPORTE TECLADO
window.addEventListener("keydown", tecladito);
function tecladito(e) {
  if (!isNaN(e.key)) return agregarNum(e);
  if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "^"
  )
    return operadores(e);
  if (e.key === "Enter") return equal();
  if (e.key === "Backspace") return borrarr();
}
