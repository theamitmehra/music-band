var len = document.querySelectorAll(".drum").length;

var aud1 = new Audio("./sounds/tom-1.mp3")
var aud2 = new Audio("./sounds/tom-2.mp3")
var aud3 = new Audio("./sounds/tom-3.mp3")
var aud4 = new Audio("./sounds/tom-4.mp3")
var aud5 = new Audio("./sounds/crash.mp3")
var aud6 = new Audio("./sounds/kick-bass.mp3")
var aud7 = new Audio("./sounds/snare.mp3")


for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function (){

        var sound = this.innerHTML;
        makesound(sound);
        btnAnimation(sound)

    } )
}

document.addEventListener("keydown", function(event){
    makesound(event.key);
    btnAnimation(event.key)
})

function makesound(key) {
    switch (key) {
        case "w":
            aud1.play();
            break;
    
        case "a":
            aud2.play();
            break;
    
        case "s":
            aud3.play();
            break;
    
        case "d":
            aud4.play();
            break;
    
        case "j":
            aud5.play();
            break;
    
        case "k":
            aud6.play();
            break;
    
        case "l":
            aud7.play();
            break;
    }


}


function btnAnimation(eventkey) {
    let activebutton = document.querySelector("." + eventkey);
    activebutton.classList.add("pressed")

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}