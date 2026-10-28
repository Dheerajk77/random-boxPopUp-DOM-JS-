const main = document.querySelector("main");
const btn = document.querySelector("button");

const box = document.createElement("div");
box.classList.add("box");

const scoree = document.querySelector("#score");
const timer = document.querySelector("#timer");
let interval;
let score = 0;
let time = 0;
let overlayReset;
let isClicked = false;

const overlay = document.querySelector("#gameOver");

// random box colour funcction()
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

// randomBox movement
const randomBox = () => {
  box.style.backgroundColor = randomColor();
  main.append(box);

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  let rX = Math.random() * mainW;
  let rY = Math.random() * mainH;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;

  isClicked = false;
};

btn.addEventListener("click", () => {
  btn.disabled = true;
  clearInterval(interval);

  interval = setInterval(() => {
    time += 1;
    timer.textContent = time;
    randomBox();
  }, 1000);

  setTimeout(function () {
    clearInterval(interval);
    overlayReset = overlay.style.display = "flex";

    setTimeout(() => {
      overlayReset = overlay.style.display = "none";
      timer.textContent = 0;
      time = 0;
      scoree.textContent = 0;
      score = 0;
      btn.disabled = false;
    }, 3000);
  }, 10000);
});



box.addEventListener("click", () => {
  if (isClicked) {
    return;
  } else {
    score += 1;
    scoree.textContent = score;
    isClicked = true;
  }
});
