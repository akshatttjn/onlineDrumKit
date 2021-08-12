var noOfButtons = document.querySelectorAll(".drum").length; // Finds out the no of buttons
var i = 0;
while (i < noOfButtons) {
  //For Button Clicks

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
  i++;
}


    //For Keyboard Clicks

    document.addEventListener("keydown", function (event) {
    //   var k = event.key;
      makeSound(event.key);
      buttonAnimation(event.key);
    });


    function makeSound(key)
    {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    }
  }

  function buttonAnimation(currentKey)
  {
      var active_button=document.querySelector("."+currentKey);
      active_button.classList.add("pressed");
      setTimeout(function(){                          //setTimeut() will execute the anonymous function after 100ms delay
          active_button.classList.remove("pressed")
      },100);


  }

 