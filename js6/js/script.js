/*
1. Опишите своими словами как работает цикл forEach.
Цикл forEach последовательно перебирает каждый элемент массива и с каждым выполняет заданное действие.
*/

"use strict";

function filterBy(arr, type) {
  let newArray = [];
  newArray = arr.filter((item) => typeof item !== type);
  return newArray;
}

let array = ["hello", "world", 23, "23", null];
console.log(filterBy(array, "number"));
