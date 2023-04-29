$(".drum").click(function () {
  var buttonInnerHTML = $(this).html();
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});

$(document).keydown(function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    default:
      console.log("Invalid key: " + key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = $("." + currentKey);
  activeButton.addClass("pressed");
  setTimeout(function () {
    activeButton.removeClass("pressed");
  }, 100);
}
