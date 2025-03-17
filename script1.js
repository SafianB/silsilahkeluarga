const menuToggle = document.querySelector('.toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener ('click', function(){
    nav.classList.toggle('slide');
})

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const currentYear = new Date().getFullYear();

const newYearTime = new Date (`April 1  ${currentYear + 0} 22:00:00`);

setInterval(updateCountdowntime, 1000);

// update Countdown 

function updateCountdowntime (){
    const currentTime = new Date ();
    const diff = newYearTime - currentTime;

    const d = Math.floor (diff / 1000 / 60 / 60 / 24);
    const h = Math.floor (diff / 1000 / 60 / 60) % 24;
    const m = Math.floor (diff / 1000 / 60) % 60;
    const s = Math.floor (diff / 1000) % 60;


 
    console.log(s);
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h; 
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s; 
}
