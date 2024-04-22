

var typed = new Typed(".text", {
strings:["Frontend Developer","Backend Developer","Web Developer","WordPress Developer","ReactJs Developer","MERN Stack Developer"],
typeSpeed : 100,
backSpeed : 100,
backDelay : 1000,
loop:true
});



function press(){
    let drop = document.querySelector(".dropdown");
    let menu = document.querySelector(".menue");
      
    drop.classList.toggle("active");
    menu.classList.toggle("active");

    menu.style.background = 'cyan' ;
}

document.onclick = function(e){
    let drop = document.querySelector(".dropdown");
    let menu = document.querySelector(".menue");
    
    if(!menu.contains(e.target)&& !drop.contains(e.target)){
        drop.classList.remove("active");
        menu.classList.remove ("active");
      
    }
}

function aboutClick(){
    let aboutBtn = document.querySelector(".details");
    let aboutText = document.querySelector(".about-p");
    aboutText.classList.toggle("p-active");
}
 
var serBtn = document.querySelectorAll(".ser-btn");
    var textCard = document.querySelectorAll(".card-text");
function serviceBtn1(){
    
    serBtn[0].classList.toggle("ser-btnactive");
    textCard[0].classList.toggle("cardText-active");

    
}
function serviceBtn2(){
    
    serBtn[1].classList.toggle("ser-btnactive");
    textCard[1].classList.toggle("cardText-active");

    
}
function serviceBtn3(){
    
    serBtn[2].classList.toggle("ser-btnactive");
    textCard[2].classList.toggle("cardText-active");

    
}

 
