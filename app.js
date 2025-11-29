let gameseq = [];
let userseq = [];
let button = ["red", "pink", "green", "yellow"];
let level = 0;
let started = false;
const h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});
function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randomIndex = Math.floor(Math.random() * 3);
  let randomColor = button[randomIndex];
  let randomButton = document.querySelector(`.${randomColor}`);
  gameseq.push(randomColor);
  console.log(gameseq);
  gameflash(randomButton);
}
function checkAns(index) {
  if (userseq[index] === gameseq[index]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over ! Your scored was <b> ${level} </b> <br> Press any key to start the game`;
    document.querySelector("body").style.background = "red";
    setTimeout(function(){
      document.querySelector("body").style.background = "white";  
    },100);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkAns(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".one");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
