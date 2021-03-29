/*
1. Почему для работы с input не рекомендуется использовать события клавиатуры?
Потому что ввод в инпут может быть не путем ввода на клавиатуре (copy/paste мышью, ввод от руки стилусом(?), распознавание речи).  События клавиатуры могут не отследить ввод в поле инпут.
*/

"use strict";
const buttons = document.querySelectorAll(".btn");

document.addEventListener("keydown", (e) => {
  buttons.forEach((btn) => {
    if (btn.innerText.toUpperCase() === e.key.toUpperCase()) {
      buttons.forEach((el) => {
        el.classList.remove("active");
      });
      btn.classList.add("active");
    }
  });
});
