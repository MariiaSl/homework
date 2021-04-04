"use strict";

$(".second-nav").on("click", "a", function (event) {
  event.preventDefault();
  let sectionFinder = $(this).attr("href"),
    sectionTop = $(sectionFinder).offset().top;
  $("body,html").animate({ scrollTop: sectionTop }, 1000);
});

$(window).scroll(function (event) {
  let pageTop = $(window).scrollTop();
  let secondWindow = $("#posts"),
    btnShowPoint = $(secondWindow).offset().top;
  if (pageTop >= btnShowPoint) {
    $("#moveUpBtn").fadeIn(100);
  } else {
    $("#moveUpBtn").fadeOut(100);
  }
});

$("#moveUpBtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$("#slideBtn").click(function () {
  $("#hideSection").slideToggle(400);
  $(this).text(function (i, text) {
    return text === "Hide" ? "Show" : "Hide";
  });
});
