let counter = 0;

function addToCounter () {
  counter + 1;
  console.log(counter);
  document.querySelector('#score').innerHTML - counter;
}

let restartButton = document.querySelector('#restart-button');

restartButton.addEventListener("click", ()=>{
  window.location.reload()
})

function correctAnswer (evt) {
  evt.target.classList.add('correct-answer')
}

function wrongAnswer (evt) {
  evt.target.classList.add('wrong-answer')
}

let wrongAnswerList = document.querySelectorAll(".wrong");

for (let i=0; i< wrongAnswerList.length; i++) {
  wrongAnswerList[i].addEventListener("click", wrongAnswer);
  wrongAnswerList[i].addEventListener("click",
      () => {wrongAnswerList[i].parentElement.style.pointerEvents = "none"});
}

let correctAnswerList = document.querySelectorAll(".correct")

for (let i=0; i< correctAnswerList.length; i++) {
  correctAnswerList[i].addEventListener("click", correctAnswer);
  correctAnswerList[i].addEventListener("click", addToCounter);
  correctAnswerList[i].addEventListener("click",
      () => {correctAnswerList[i].parentElement.style.pointerEvents = "none"});
}