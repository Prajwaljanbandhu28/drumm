 var noOfDrums = document.querySelectorAll(".drum").length;



//detecting a click

for(var i=0; i<noOfDrums; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function () {

     var buttonInnerHtml = this.textContent;

  makeSound(buttonInnerHtml);

  buttonAnimation(buttonInnerHtml);

  });

}

  // detecting   a keyboard btn press
   document.addEventListener("keypress",function(event){
     makeSound(event.key);
     buttonAnimation(buttonInnerHtml);
   })


  function makeSound(key){
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
       break;
     case "a":
         var tom2 = new Audio("sounds/tom-2.mp3")
         tom2.play();
        break;
     case "s":
          var tom3 = new Audio("sounds/tom-3.mp3")
          tom3.play();
         break;
     case "d":
           var d = new Audio("sounds/tom-4.mp3")
           d.play();
          break;
     case "j":
            var j = new Audio("sounds/snare.mp3")
            j.play();
           break;
     case "k":
             var k = new Audio("sounds/crash.mp3")
             k.play();
            break;
     case "l":
          var l = new Audio("sounds/kick-bass.mp3")
             l.play();
             break;

      default: console.log(buttonInnerHtml);

    }
  }

  function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function() {
      activeKey.classList.remove("pressed");
    }, 100);
  }
