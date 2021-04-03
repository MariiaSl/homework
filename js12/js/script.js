/*
1. Опишите своими словами разницу между функциями `setTimeout()` и `setInterval()`.

setTimeout() запускает функцию 1 раз через указанный интервал времени, 
setInterval() - запускается постоянно через указанный интервал времени.

2. Что произойдет, если в функцию `setTimeout()` передать нулевую задержку? Сработает ли она мгновенно, и почему? 

Сработает мгновенно, но после выполнения текущего кода.

3. Почему важно не забывать вызывать функцию `clearInterval()`, когда ранее созданный цикл запуска вам уже не нужен? 

Чтобы остановить дальнейшее выполнение цикла.
*/

"use strict";

const images = Array.from(document.querySelectorAll(".image-to-show"));
const start = document.querySelector("#play-button");
const stop = document.querySelector("#stop-button");

function hideImage(image) {
  image.classList.add("hide");
  image.classList.remove("show");
}

function showImage(image) {
  image.classList.add("show");
  image.classList.remove("hide");
}

let imageInterval = setInterval(nextImage, 3000);

const firstImageIndex = 0;
const lastImageIndex = images.length - 1;
let currentIndex = 0;

function nextImage() {
  let currentImage = images[currentIndex];
  hideImage(currentImage);
  if (currentIndex >= lastImageIndex) {
    currentIndex = firstImageIndex;
  } else {
    currentIndex = currentIndex + 1;
  }
  let nextImage = images[currentIndex];
  showImage(nextImage);
}

let playing = true;
stop.addEventListener("click", stopSlideShow);
start.addEventListener("click", startSlideShow);

function stopSlideShow() {
  if (playing) {
    playing = false;
    clearInterval(imageInterval);
  }
}

function startSlideShow() {
  if (!playing) {
    playing = true;
    imageInterval = setInterval(nextImage, 3000);
  }
}
