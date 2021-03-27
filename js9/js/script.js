/*
1. Опишите своими словами, как Вы понимаете, что такое обработчик событий.
Обработчик событий это функция со "шпионом", который подслушивает когда произойдет сообщенное ему событие (клик мыши, кнопки клавиатуры тп) и в момент, когда событие происходит выполняет заданное в функции действие.
*/

"use strict";

const tabsNonActive = Array.from(document.getElementsByClassName("tabs-title"));
const textNonActive = Array.from(document.getElementsByClassName("tabs-text"));
//console.log(textNonActive);
textNonActive.forEach((txt) => txt.classList.add("hide"));

tabsNonActive.forEach((tab, index) => {
  tab.addEventListener("click", showTextHandler);
  function showTextHandler(event) {
    textNonActive.forEach((txt) => txt.classList.add("hide"));
    textNonActive[index].classList.remove("hide");

    tabsNonActive.forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");
  }
});
