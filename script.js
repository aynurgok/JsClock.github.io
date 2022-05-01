let userName = prompt("Lütfen adınızı giriniz:");
const span= document.querySelector("#span")
span.innerHTML=`${span.innerHTML} ${userName}`

let zaman=new Date();
let saat=zaman.getHours();
if(saat>=6 && saat<=12){
    const span= document.querySelector("#selam")
    const newLocal = "Günaydın! ";
   span.innerHTML=`${span.innerHTML} ${newLocal}`
}
else if (saat>=12 && saat<20)
alert('Tünaydın '+userName);
 
else if (saat>=20 && saat<24)
alert('İyi akşamlar '+userName);
 
else if (saat>=0 && saat<6)
alert('İyi geceler '+userName);



function clock(){
   let today=new Date();

   let hours=today.getHours();
   let minutes=today.getMinutes();
   let seconds=today.getSeconds();

   if(hours<10) {
    hours ="0"+ hours;
}
if(minutes<10) {
    minutes ="0"+ minutes;
}
if(seconds<10) {
    seconds = "0"+ seconds;
}


   document.querySelector(".hours").innerHTML=hours;
   document.querySelector(".minutes").innerHTML=minutes;
   document.querySelector(".seconds").innerHTML=seconds;
}
const updateClock=setInterval(clock,1000);




let today=new Date();

const monthName=today.toLocaleString("default",{month:"short"});
const dayName=today.toLocaleString("default",{weekday:"long"});
const dayNumber=today.getDate();


document.querySelector(".month-name").innerHTML=monthName;
document.querySelector(".day-name").innerHTML=dayName;
document.querySelector(".dayNumber").innerHTML=dayName;



