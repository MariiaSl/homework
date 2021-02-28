"use strict";
/* 1. Обьяснить своими словами разницу между обьявлением переменных через var, let и const.

a) let, vat - переменные, значение которых можно изменить:

a.1) let myAge = 27;
myAge = 18;
console.log(myAge); // 18

a.2) var herAge = 35;
herAge = 8;
console.log(herAge); // 8

b) const - константа, значение которой нельзя изменить (если она не обьявлена внутри обьекта)

b.1) const hisAge = 27;
hisAge = 18;
console.log(hisAge); // Uncaught TypeError: Assignment to constant variable.

b.2) const person = {
  name: "Mariia",
};
console.log((person.name = "Mariia Slobodina")); // Mariia Slobodina

2. Почему объявлять переменную через var считается плохим тоном?
var была единственная переменная до появления let/const с выходом ES2015.
a) Переменная Let доступна только в пределах блока, где она обьявлена (локальная область видимости)
Переменная var будет доступна и за пределмаи блока, в котором была обьявлена.

 a.1) function letFunc() {
  for (let x = 0; x < 5; x++) {
    console.log(x); // 1,2,3,4
  }
  console.log(x); //Uncaught ReferenceError: x is not defined
}
letFunc();

a.2) function varFunc() {
  for (var y = 0; y < 5; y++) {
    console.log(y); // 1,2,3,4
  }
  console.log(y); // 5
}
varFunc();

b) Инициализировать var можно до обьявление переменной:
age = 18;
console.log(age);
var age;

При использовании var результат менее предсказуем, так как у var область видимости не ограничивается блоком, в котором она обьявлена и ее можно переобьявить или изменить ее значение после инициализации.

*/

// HW 1

let name;
do {
  name = prompt("Please, enter your name");
} while (!name || name.trim() === "" || !isNaN(+name));
let age;
do {
  age = prompt("Please, enter your age");
} while (!age || age.trim() === "" || isNaN(+age));
if (age < 18) {
  alert(`You are not allowed to visit this website`);
} else if (age >= 18 && age <= 22) {
  let result = confirm(`Are you sure you want to continue?`);
  let message = result
    ? `Welcome, ${name}`
    : `You are not allowed to visit this website`;
  alert(message);
} else {
  alert(`Welcome, ${name}`);
}
