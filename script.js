const secundsBar  = document.querySelector('.sec-bar');
const minBar  = document.querySelector('.min-bar');
const hourBar  = document.querySelector('.hour-bar');

function setDate (){
    const now = new Date;
    console.log('ok')
    const seconds = now.getSeconds();
    const minuts = now.getMinutes();
    const hours= now.getHours();
    console.log(hours+'h ' + minuts+'min ' + seconds+' s')
    const secodsDegrees = ((seconds*6)+90);
    const minDegrees = ((minuts*6)+90);
    const hourDegrees = (hours*30)+90;
    secundsBar.style.transform = `rotate(${secodsDegrees}deg)`;
    minBar.style.transform = `rotate(${minDegrees}deg)`;
    hourBar.style.transform = `rotate(${hourDegrees}deg)`;
}
window.setInterval(setDate,1000)
