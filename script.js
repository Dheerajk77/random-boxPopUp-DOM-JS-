/*
// ---------------->Event Delegation<---------------------
const five = document.querySelector("#five");
const main = document.querySelector('main');

// five.addEventListener('click',(event)=>{
//     console.log(event.target);
// })
*/

/*
// idhar hamne main(parent) pe event laagaya hai aur ye event delegate(fetch)  karke dekhta hai ki konse child pe event perform hua hai. aur EventListener() wo event hame return karta hai....
main.addEventListener('click',(event)=>{
    console.log(event.target);
})
    */

// setInterval() & setTimeout()

// setInterval(function(){
//     console.log("Hey Bhailog");
// },1000)

/*
setTimeout(()=>{
    console.log("Hey...");
},2000)
*/
/*
setTimeout(()=>{
    console.log("Hey!, Iam Timeout...");
},10000)
*/

// let random = Math.random() *2;
// console.log(Math.floor(random));









// UI(Random Box Generator) practice project

const main = document.querySelector("main");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoree = document.querySelector('#score')

const overlay = document.querySelector('#overlay');

const box = document.createElement("div");
box.classList.add("box");

let time = 0;
let score = 0;
let interval;


const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const randomBox = () => {
    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;

  box.style.backgroundColor = randomColor();
  main.append(box);

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

btn.addEventListener("click", () => {
  clearInterval(interval);

  interval = setInterval(() => {
    time += 1;
    timer.textContent = time;
    randomBox();
  }, 1000);

  setInterval(() => {
    clearTimeout(interval);
    overlay.style.display = 'flex';
  }, 10000);
});



box.addEventListener('click',() => {
  score += 1;
  scoree.textContent = score;
})