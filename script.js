let numberOfDrums = document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      
      let buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);
      animationButton(buttonInnerHTML);
      
    });
    
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  animationButton(event.key);
  
} )

function animationButton(currentButton){
    let activeButton= document.querySelector('.'+currentButton);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
      activeButton.classList.remove('pressed')
    },100)
    
    }

function makesound(key){
  switch (key) {
    case "a":
        const tone1 = new Audio('sounds/clap.wav');
      tone1.play();
      
        break;
        case "s":
            const tone2 = new Audio('sounds/hihat.wav');
            tone2.play();
              break;
              case "d":
            const tone3 = new Audio('sounds/kick.wav');
            tone3.play();
              break;
              case "f":
            const tone4 = new Audio('sounds/openhat.wav');
            tone4.play();
              break;
              case "g":
              const tone5 = new Audio('sounds/boom.wav');
            tone5.play();
              break;
              case "h":
              const tone6 = new Audio('sounds/ride.wav');
            tone6.play();
              break;
              case "j":
            const tone7 = new Audio('sounds/snare.wav');
            tone7.play();
              break;
              case "k":
            const tone8 = new Audio('sounds/tom.wav');
            tone8.play();
              break;
              case "l":
            const tone9 = new Audio('sounds/tink.wav');
            tone9.play();
              break;
  
    default:console.log(buttonInnerHTML);
        
  }

}

