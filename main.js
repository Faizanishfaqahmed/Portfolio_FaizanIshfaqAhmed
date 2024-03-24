

var typed = new Typed(".text", {
strings:["Frontend Developer","Backend Developer","Web Developer","WordPress Developer","ReactJs Developer","MERN Stack Developer"],
typeSpeed : 100,
backSpeed : 100,
backDelay : 1000,
loop:true
});

let Hour = new Date().getHours();
console.log(Hour);

let minutes, seconds, currentTime, selectedTime;
minutes=new Date().getMinutes();
seconds = new Date().getSeconds();
currentTime = Hour +" "+ minutes+" " +seconds;
console.log(currentTime);

selectedTime = 7 +" "+ 46 +" " + seconds;
if (selectedTime === currentTime){
    alert("Time is go to office");
    window.location.href="./images/Responsive Web Design.png"
}
