"use strict";

let themeSwitcherBtn = document.getElementById("themeSwitcherBtn");

let docTheme = localStorage.getItem("theme");

if (docTheme === "") {
  document.body.className = "";
  themeSwitcherBtn.innerText = "Dark mode";
} else {
  document.body.className = "dark";
  themeSwitcherBtn.innerText = "Light mode";
}
// console.log(docTheme);

themeSwitcherBtn.addEventListener("click", themeSwitchHandler);
function themeSwitchHandler() {
  let element = document.body;
  element.classList.toggle("dark");
  if (element.classList.contains("dark")) {
    themeSwitcherBtn.innerText = "Light mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeSwitcherBtn.innerText = "Dark mode";
    localStorage.setItem("theme", "");
  }
}
// console.dir(themeSwitchHandler);
