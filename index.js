//score 
let score = 0;

function increaseScore () {
  score += 1;
  updateScore();
}

function updateScore() {
  const scoreElement = document.getElementById("#score");
  scoreElement.textContent = "Score: " + score;
}

// reset button
let restartButton = document.querySelector('#reset');

restartButton.addEventListener("click", ()=>{
  window.location.reload()
})

//correct answer function
function correctAnswer (evt) {
  evt.target.classList.add('correct-answer')
}

//wrong answer function and for
function wrongAnswer (evt) {
  evt.target.classList.add('wrong-answer')
}

let wrongAnswerList = document.querySelectorAll(".wrong");

for (let i=0; i< wrongAnswerList.length; i++) {
  wrongAnswerList[i].addEventListener("click", wrongAnswer);
  wrongAnswerList[i].addEventListener("click",
      () => {wrongAnswerList[i].parentElement.style.pointerEvents = "none"});
}

//correct answer 
let correctAnswerList = document.querySelectorAll(".correct")

for (let i=0; i< correctAnswerList.length; i++) {
  correctAnswerList[i].addEventListener("click", correctAnswer);
  correctAnswerList[i].addEventListener("click", increaseScore);
  correctAnswerList[i].addEventListener("click",
      () => {correctAnswerList[i].parentElement.style.pointerEvents = "none"});
}

//pass or fail function

var status = (marks >= 6) ? "Pass" : "Fail";
