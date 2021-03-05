/*
1. Опишите своими словами, что такое метод обьекта
Метод обьекта это определенное действие (или несколько), которое можно выполнить с обьектом и которое хранятся внутри обьекта как его свойство.
*/

"use strict";

// вариант 1 - без Object.defineProperty

function createNewUser() {
  let newUser = {
    firstName: "",
    lastName: "",
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
    setFirstName(newName) {
      this.firstName = newName;
    },
    setLastName(newLasName) {
      this.lastName = newLasName;
    },
  };
  return newUser;
}

let user = createNewUser();

let userName = prompt("Enter your name");
user.setFirstName(userName);

let userLastNme = prompt("Enter your last name");
user.setLastName(userLastNme);

console.log(user.getLogin());

// вариант 2 - с Object.defineProperty
/*
function createNewUser(firstName, lastName) {
  let newUser = {
    firstName: "", // Оставлять пустыми или убрать - не поняла
    lastName: "", // Оставлять пустыми или убрать - не поняла
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
    setFirstName(newName) {
      this.firstName = newName;
    },
    setLastName(newLasName) {
      this.lastName = newLasName;
    },
  };
  Object.defineProperty(newUser, "firstName", {
    value: prompt("Enter your name"),
    writable: false,
  });
  Object.defineProperty(newUser, "lastName", {
    value: prompt("Enter your last name"),
    writable: false,
  });
  return newUser;
}

let user = createNewUser();
console.log(user.getLogin());
*/
