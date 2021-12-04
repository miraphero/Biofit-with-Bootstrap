const countDown = new Date ("Dec 6,2021 17:14:00").getTime();

const setTimeDisplay = setInterval(() => {

const nowTime = new Date().getTime();

const distance = countDown - nowTime;

const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
document.getElementById("hours").textContent = hours;

const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
document.getElementById("minutes").textContent = minutes;

const seconds = Math.floor(distance % (1000 * 60) / 1000);
document.getElementById("seconds").textContent = seconds;


}, 1000);