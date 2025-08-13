const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

const secondDeg = ((seconds / 60) * 360) + 90;
        const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();
