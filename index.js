//jshint esversion: 6
var raw = new Audio("sounds/RAW.mp3");
var victoryArthur = new Audio("sounds/1 Oh Archie.mp3");
var cyka = new Audio("sounds/oy-blyat.mp3");
var victoryDani = new Audio("sounds/cyka-blyat.mp3");

var countDani = 0;
var countArthur = 0;

$(".dani").click(function() {
  countDani = countDani + 1;
  countArthur = countArthur - 1;
  cyka.play();
  if (countDani == countArthur) {
    $("h1").html("Keiner führt");
    animateCSS("h1", "bounceInDown");
  }
  else if (countDani >= 20) {
    $("h1").html("Dani hat gewonnen!");
    animateCSS("h1", "tada");
    setTimeout(function(){victoryDani.play();}, 1000);
    countDani = 0;
    countArthur = 0;
  }
  else if (countDani > countArthur) {
    $("h1").html("Dani führt bei: " + "<span>" + countDani + "</span>");
    animateCSS("span", "flash");
  } else {
    $("h1").html("Arthur führt bei: " + "<span>" + countArthur + "</span>");
    animateCSS("span", "flash");
  }
});

$(".arthur").click(function() {
  countArthur = countArthur + 1;
  countDani = countDani - 1;
  raw.play();
  if (countDani == countArthur) {
    $("h1").html("Keiner führt");
    animateCSS("h1", "bounceInDown");
  }
  else if (countArthur >= 20) {
    $("h1").html("Arthur hat gewonnen!");
    animateCSS("h1", "tada");
    setTimeout(function(){victoryArthur.play();}, 1000);
    countArthur = 0;
    countDani = 0;
  }
  else if (countArthur > countDani) {
    $("h1").html("Arthur führt bei: " + "<span>" + countArthur + "</span>");
    animateCSS("span", "flash");
  } else {
    $("h1").html("Dani führt bei: " + "<span>" + countDani + "</span>");
    animateCSS("span", "flash");
  }
});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
}

animateCSS("h1", "heartBeat");
