/*
1. Описать своими словами для чего вообще нужны функции в программировании.
Функции нужны для того, чтобы описать определенное действие (c набором входных и выходных параметров) один раз и вызывать в нужных местах страницы не прописывая код повторно.
2. Описать своими словами, зачем в функцию передавать аргумент.
С помощью аргументов можно подставить в функцию любые необходимые данные для выполнения функцией заданного в ней действия.
Это делает функцию более универсальной.
*/

"use strict";

function calculate(firstNum, secondNum, mathOperation) {
  switch (mathOperation) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "/":
      return firstNum / secondNum;
    case "*":
      return firstNum * secondNum;
  }
}
let start;
do {
  start = Number(prompt("Enter first number"));
} while (!start || isNaN(start));
let end;
do {
  end = Number(prompt("Enter second number"));
} while (!end || isNaN(end));
let operator;
do {
  operator = prompt("Enter math operation: +, -, /, *");
} while (
  !operator ||
  (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*")
);

alert(calculate(start, end, operator));
