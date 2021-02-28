/*1. Описать своими словами в несколько строчек, зачем в программировании нужны циклы.
Циклы нужны для того, чтобы выполнить действие необходимое количество раз на заданных условиях не прописывая один и тот же код многократно.
Например вывести список, выполнить инструкцию.
*/

"use strict";

let userNum;
do {
  userNum = prompt("Please type any number");
} while (
  !userNum ||
  userNum.trim() == "" ||
  isNaN(+userNum) ||
  userNum % 1 !== 0 // Number.isInteger(userNum) число через точку пропускает
);

for (let result = 1; result <= userNum; result++) {
  if (result % 5 === 0) {
    console.log(result);
  } else if (userNum < 5) {
    console.log("Sorry, no numbers!");
  }
}

/* extra task 
let m;
do {
  m = prompt("Please type number 1");
} while (!m || m.trim() == "" || isNaN(+m) || m % 1 !== 0);
let n;
do {
  n = prompt("Please type number 2");
} while (!n || n.trim() == "" || isNaN(+n) || n % 1 !== 0);
for (let prime = m; prime <= n; prime++) {
  if (prime <= 1 || prime % 2 === 0 || prime % 3 === 0) continue;
  console.log(prime); // не показывает 3 и 5, и пропускает 25 >:(  )
}
 */
