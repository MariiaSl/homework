"use strict";
const showPass = document.querySelector("#icon1");
const showConfirm = document.querySelector("#icon2");

const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
password2.style.cssText = "margin-bottom: 5px";

const submit = document.querySelector(".btn");
submit.style.cssText = "position: fixed; margin-top: 170px";


const span = document.createElement("span");
function showSpan(el, text) {
    el.textContent = text;
    el.style.color = "red";
    submit.before(el);
}
let text1 = "Nooooooo"
let text2 = "Try again"


function changeOnClick(input, icon) {
if (input.type === "password") {
  input.type = "text";
  icon.className = "fas fa-eye-slash";
} else {
  input.type = "password"
  icon.className = "fas fa-eye";
};
}

showPass.addEventListener("click", function(){
  changeOnClick(password1, showPass)
});

showConfirm.addEventListener("click", function(){
  changeOnClick(password2, showConfirm)
});

// showPass.addEventListener("click", showPassHandler);

// function showPassHandler(evt) {
// if (password1.type === "password") {
//   password1.type = "text";
//   evt.target.className = "fas fa-eye-slash";
// } else {
//   password1.type = "password"
//   evt.target.className = "fas fa-eye";
// };
// }

// showConfirm.addEventListener("click", confirmPassHandler);

// function confirmPassHandler(evt) {
// if (password2.type === "password") {
//   password2.type = "text";
//   evt.target.className = "fas fa-eye-slash";
// } else {
//   password2.type = "password"
//   evt.target.className = "fas fa-eye";
// };
// }

  
submit.addEventListener("click", submitClickHAndler)
function submitClickHAndler (evt) {
  evt.preventDefault();
    password1.addEventListener("focus", onImputFocus)
    password2.addEventListener("focus", onImputFocus)
    
    function onImputFocus (evt){
      if (evt){
        span.textContent = ""
      }
    }

if (password1.value.length < 1 || password1.value.trim() === "" || password2.value.length < 1 || password2.value.trim() === ""){
   showSpan(span, text1)
  } else if (
    password1.value !== password2.value
    ){ 
      showSpan(span, text2)
  }  else {
    alert("You win");
}
}
