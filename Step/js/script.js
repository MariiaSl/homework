"use strict";

/* Services section */

let servicesTabs = Array.from(
  document.getElementsByClassName("services-list-item")
);
let servicesText = Array.from(
  document.getElementsByClassName("services-desription-item")
);

servicesTabs.forEach((tab) => {
  tab.addEventListener("click", showTextHandler);

  function showTextHandler(event) {
    servicesText.forEach((txt) => {
      if (
        event.target.getAttribute("data-about") ===
        txt.getAttribute("data-about")
      ) {
        servicesTabs.forEach((el) => {
          el.classList.remove("services-item-active");
          txt.classList.remove("hide");
          txt.classList.add("show-services");
        });
        event.target.classList.add("services-item-active");
      } else {
        txt.classList.remove("show-services");
        txt.classList.add("hide");
      }
    });
  }
});

/* Works section */

let worksTabs = Array.from(
  document.getElementsByClassName("works-categories-item")
);
let worksImages = Array.from(
  document.getElementsByClassName("works-list-item")
);

worksTabs.forEach((tab) => {
  tab.addEventListener("click", showImgHandler);
  function showImgHandler(event) {
    worksImages.forEach((img) => {
      if (
        event.target.getAttribute("data-about") ===
        img.getAttribute("data-about")
      ) {
        img.classList.remove("hide");
        img.classList.add("show-works");

        $(".image-loader").fadeIn(100);
      } else {
        img.classList.remove("show-works");
        img.classList.add("hide");
      }
    });
  }
});

let tabAll = document.querySelector(".all");
let loadBtn = document.querySelector(".image-loader");

/* all не должны так быстро появляться */
tabAll.addEventListener("click", onAllTabClick);
function onAllTabClick() {
  worksImages.forEach((img) => {
    img.classList.remove("hide");
    img.classList.add("show-works");
    $(".image-loader").fadeOut(100);
  });
}

$(".image-loader").on("click", function () {
  $(".animate").removeClass("hide-animation").addClass("show-animation");

  setTimeout(() => {
    $(".animate").removeClass("show-animation").addClass("hide-animation");
    $(".works-list-item:hidden")
      .slice(0, 12)
      // .slideDown(800)  <- плохо выглядит
      .fadeIn(800)
      .removeClass("hide")
      .addClass("show-works")
      .attr("style", "");

    if ($(".works-list-item:hidden").length === 0) {
      $(".image-loader").fadeOut(100);
    }
  }, 3000);
});

/* carousel */

const smallPhotoList = document.querySelector(".small-photo-list");
const smallPhotoItem = Array.from(
  document.querySelectorAll(".small-photo-item")
);

const prev = document.querySelector(".left");
const next = document.querySelector(".right");

const carouselButtons = document.querySelectorAll(".arrow");
const numberOfPhotos = smallPhotoItem.length;
let count = 1;
let position = 0;

let width = 95; // ширина картинки с паддингом

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "left-arrow") {
      if (count !== 1) {
        count--;
        position += width;
      }
    } else {
      if (count !== numberOfPhotos - 3) {
        count++;
        position -= width;
      }
    }
    smallPhotoList.style.left = position + "px";
  });
});

//Client quote changer

const nameList = Array.from(document.querySelectorAll(".name-list-item"));
const quoteList = Array.from(document.querySelectorAll(".feedback-list-quote"));
const mainPhotoList = Array.from(document.querySelectorAll(".main-photo-item"));

$(smallPhotoItem).each(function (index) {
  $(this).on("click", function (event) {
    // если оставить анимацию фото прыгает вверх-вниз
    smallPhotoItem.forEach((el) => {
      $(el.childNodes).removeClass("move-up");
      $(el).removeClass("move-up");
      $(el.childNodes).addClass("move-down");
      $(el).addClass("move-down");

      // $(el.childNodes).animate({ marginTop: "0" }, 300);
      // $(el).animate({ marginTop: "0" }, 300);
    });
    $(event.target).removeClass("move-down");
    $(event.target).addClass("move-up");

    // $(event.target).animate({ marginTop: "-14px" }, 300);

    changeClient(nameList);
    changeClient(quoteList);
    changeClient(mainPhotoList);
  });
});

function changeClient(client) {
  $(client).each(function (index, name) {
    event.stopPropagation();
    if (
      $(event.target.parentNode).data("about") === $(name).data("about") ||
      $(event.target).data("about") === $(name).data("about")
    ) {
      $(name).removeClass("hide");
      $(name).addClass("show");
    } else {
      $(name).addClass("hide");
      $(name).removeClass("show");
    }
  });
}
