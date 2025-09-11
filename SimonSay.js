let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
     if(started == false){
        console.log("Game has started");
        started = true;

        levelUp();
     }
});

function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
          btn.classList.remove("flash");
     }, 250);
}
function userFlash(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
          btn.classList.remove("userflash");
     }, 250);
}

function levelUp(){
     userSeq = [];
     level++;

     h2.innerText = `level ${level}`;

     let randomIdx = Math.floor(Math.random() * 4); // also fixed random number (0-3)
     let randomColor = btns[randomIdx];
     let randomBtn = document.querySelector(`.${randomColor}`);
     // console.log(randomIdx);
     // console.log(randomColor);
     // console.log(randomBtn);
     gameSeq.push(randomColor);
     console.log(gameSeq);
     gameFlash(randomBtn); // <-- pass randomBtn here
}

function checkAns(idx){
     
     // let idx = level - 1;
     if(userSeq[idx] == gameSeq[idx]){
          if(userSeq.length == gameSeq.length){
              setTimeout(levelUp, 1000); 
          }
     }
     else{
          h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press Any Key to Restart`;
          document.querySelector("body").style.backgroundColor = "red";
          setTimeout(function(){
               document.querySelector("body").style.backgroundColor = "white";
          }, 150);
          reset();
     }
}

function btnPress(){
     // console.log(this);
     let btn = this;
     userFlash(btn);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);

     checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
     btn.addEventListener("click", btnPress);
}

function reset(){
     started = false;
     gameSeq = [];
     userSeq = [];
     level = 0;
 }
