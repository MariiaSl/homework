/*
1. Опишите своими словами, как Вы понимаете, что такое обработчик событий.
Обработчик событий это функция со "шпионом", который подслушивает когда произойдет сообщенное ему событие (клик мыши, кнопки клавиатуры тп) и в момент, когда событие происходит выполняет заданное в функции действие.
*/

"use strict";
//var 1 - tab finds text by index
// const tabsNonActive = Array.from(document.getElementsByClassName("tabs-title"));
// const textNonActive = Array.from(document.getElementsByClassName("tabs-text"));
// //console.log(textNonActive);
// textNonActive.forEach((txt) => txt.classList.add("hide"));

// tabsNonActive.forEach((tab, index) => {
//   tab.addEventListener("click", showTextHandler);
//   function showTextHandler(event) {
//     textNonActive.forEach((txt) => txt.classList.add("hide"));
//     textNonActive[index].classList.remove("hide");

//     tabsNonActive.forEach((tab) => tab.classList.remove("active"));
//     event.target.classList.add("active");
//   }
// });

//var2 - tab finds text by data attribute

let tabsNonActive = Array.from(document.getElementsByClassName("tabs-title"));
let textNonActive = Array.from(document.getElementsByClassName("tabs-text"));
textNonActive.forEach((txt) => {
  txt.classList.add("hide");
});

tabsNonActive.forEach((tab) => {
  tab.addEventListener("click", showTextHandler);

  function showTextHandler(event) {
    textNonActive.forEach((txt) => {
      if (event.target.getAttribute("id") === txt.getAttribute("data-about")) {
        tabsNonActive.forEach((el) => {
          el.classList.remove("active");
          txt.classList.remove("hide");
        });
        event.target.classList.add("active");
      } else {
        txt.classList.add("hide");
      }
    });
  }
});
