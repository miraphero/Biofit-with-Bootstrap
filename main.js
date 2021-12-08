const countDown = new Date ("Dec 13,2021 17:14:00").getTime();

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

// for Footer Section Timer

const countDown2 = new Date ("Dec 14,2021 17:14:00").getTime();

const setTimeDisplay2 = setInterval(() => {

const nowTime2 = new Date().getTime();

const distance2 = countDown2 - nowTime2;

const hours2 = Math.floor(distance2 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
document.getElementById("hours2").textContent = hours2;

const minutes2 = Math.floor(distance2 % (1000 * 60 * 60) / (1000 * 60));
document.getElementById("minutes2").textContent = minutes2;

const seconds2 = Math.floor(distance2 % (1000 * 60) / 1000);
document.getElementById("seconds2").textContent = seconds2;


}, 1000);


// // checkout form - country selector
// document.addEventListener('DOMContentLoaded', () => {

//     const selectDrop = document.querySelector('#countries');

//     fetch('http://restcountries.eu/rest/v2/all').then(res 
//     => {
//         return res.json();
//     }).then(data => {
//         let output = "";
//         data.forEach(country => {
//             output += `

//             <option value="${country.name}">${country.name} </option>`;
//         })

//         selectDrop.innerHTML = output;
//     }).catch(err => {
//         console.log(err);
//     });
// });