/*
1. Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)

DOM – это объектная модель документа. Он создает из HTML-элементов, текста, комментариев объекты (узлы DOM-дерева) и соединяет веб-страницу с языками описания сценариев либо языками программирования.

*/

"use strict";
//1--------
// let array = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// let list = document.createElement("ul");
// document.body.prepend(list);

// array.forEach((item) => {
//   let listItems = document.createElement("li");
//   list.append(listItems);
//   listItems.innerHTML += item;
// });

//2-------------
// let array = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// let list = document.createElement("ul");
// document.body.prepend(list);

// let newArray = array.map((item) => {
//   let listItems = document.createElement("li");
//   list.append(listItems);
//   return (listItems.innerHTML += item);
// });

//3--------------------------------------
function showList(arr, parent) {
  let list = document.createElement(parent);
  document.body.prepend(list);

  let newArray = arr.map((item) => {
    let listItems = document.createElement("li");
    list.append(listItems);
    return (listItems.innerHTML += item);
  });
}

let array = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
showList(array, "ul");
