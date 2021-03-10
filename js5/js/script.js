/*
1. Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования
Экранирование нужно для поиска или использования спецсимволов(или  слэша) в качестве обычных символов.
*/

"use strict";

function createNewUser() {
  let newUser = {
    getAge() {
      let today = new Date();
      let currentDay = today.getDate();
      let currentMonth = today.getMonth() + 1;
      let currentYear = today.getFullYear();
      let inputDay = Number(this.birthday.substring(0, 2));
      let inputMonth = Number(this.birthday.substring(3, 5));
      let inputYear = Number(this.birthday.substring(6, 10));

      let birthDate = new Date(inputYear, inputMonth - 1, inputDay);
      let birthYear = birthDate.getFullYear();
      let age = currentYear - birthYear;
      if (currentMonth < inputMonth || currentDay < inputDay) {
        age -= 1;
      }
      return age;
    },

    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
    getPassword() {
      return (
        this.firstName[0].toUpperCase() +
        this.lastName.toLowerCase() +
        this.birthday.substring(6, 10)
      );
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
  Object.defineProperty(newUser, "birthday", {
    value: prompt("Enter your date of birth (dd.mm.yyyy)"),
    writable: false,
  });
  return newUser;
}
//console.log(createNewUser());
let user = createNewUser();
console.log(user);
console.log(user.getAge());
console.log(user.getLogin());
console.log(user.getPassword());
