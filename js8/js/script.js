/*
1. Опишите своими словами, как Вы понимаете, что такое обработчик событий.
Обработчик событий это функция со "шпионом", который подслушивает когда произойдет сообщенное ему событие (клик мыши, кнопки клавиатуры тп) и в момент, когда событие происходит выполняет заданное в функции действие.
*/

"use strict";

const input = document.getElementById("input");

input.addEventListener("focus", onfocus);
function onfocus() {
  input.addEventListener("keypress", keyPressHandler);
  input.style.outline = 0;
  input.style.borderColor = "lightgreen";
}

const span = document.createElement("span");
const btn = document.createElement("button");

btn.textContent = "[ x ]";
btn.style.cssText =
  "position:fixed; height: 19px; border: 0; background: transparent; outline: 0; color: darkred";
let coordsX = input.getBoundingClientRect();
btn.style.left = coordsX.left + 145 + "px";
btn.style.top = coordsX.bottom + -22 + "px";

btn.addEventListener("click", clickCancelHandler);

function clickCancelHandler() {
  btn.remove();
  span.remove();
  p.remove();
  input.value = "";
}

input.addEventListener("blur", focusOutHandler);

function focusOutHandler() {
  input.style.borderColor = null;
  input.style.color = "green";

  function createMessageAbove(currentPrice) {
    let message = span;
    message.style.cssText = "position:fixed";

    let coords = input.getBoundingClientRect();
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + -40 + "px";

    message.innerHTML = currentPrice;
    return message;
  }

  let price = input.value;
  if (price < 0) {
    input.style.borderColor = "red";
    p.textContent = "Please enter correct price";
    input.after(p);

    // insertAdjacentText выглядит очень плохо
    // let error = document.body.insertAdjacentText(
    //   "afterend",
    //   "Please enter correct price"
    // );
  } else {
    input.style.borderColor = null;
    if (p) {
      p.remove();
    }
  }

  let message = createMessageAbove(`Текущая цена: ${price}`);
  document.body.prepend(message);
  message.append(btn);
}

const p = document.createElement("p");

function keyPressHandler(evt) {
  if (typeof +evt.key !== "number" || isNaN(+evt.key)) {
    //evt.preventDefault();  // закомментировала, иначе не дает воодить числа меньше 0
    p.textContent = "Please enter numbers only";
    input.after(p);
  } else {
    if (p) {
      p.remove();
    }
  }
}
