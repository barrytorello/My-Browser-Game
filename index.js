const Questions = [{
  q: "How many teams are in the NFL?",
  a: [{ text: "31", isCorrect: false },
     { text: "32", isCorrect: true },
     { text: "23", isCorrect: false },
     { text: "30", isCorrect: false }
]},

{
  q: "How many points are earned for a touchdown?",
  a: [{ text: "6", isCorrect: true },
     { text: "7", isCorrect: false },
     { text: "5", isCorrect: false },
     { text: "8", isCorrect: false }
]},

{
  q: "What is the position called for the person who throws the ball?",
  a: [{ text: "Center", isCorrect: false },
     { text: "Tight End", isCorrect: false },
     { text: "Quarterback", isCorrect: true },
     { text: "Kicker", isCorrect: false }
]},

{
  q: "How many total players are on the field at all times?",
  a: [{ text: "35", isCorrect: false },
     { text: "11", isCorrect: true },
     { text: "20", isCorrect: false },
     { text: "22", isCorrect: false }
]},

{
  q: "Where is the Hall of Fame located?",
  a: [{ text: "Hawaii", isCorrect: false },
     { text: "Pennsylvania", isCorrect: false },
     { text: "Ohio", isCorrect: true },
     { text: "Nevada", isCorrect: false }
]},

{
  q: "Who holds the record for the most passing yards of all time?",
  a: [{ text: "Drew Brees", isCorrect: false },
     { text: "Tom Brady", isCorrect: true },
     { text: "Steve Young", isCorrect: false },
     { text: "Peyton Manning", isCorrect: false }
]},

{
  q: "Who holds the record for the most receiving yards of all time?",
  a: [{ text: "Jerry Rice", isCorrect: true },
     { text: "Larry Fitzgerald", isCorrect: false },
     { text: "Randy Moss", isCorrect: false },
     { text: "Calvin Johnson", isCorrect: false }
]},

{
  q: "Who holds the record for the most rushing yards of all time?",
  a: [{ text: "Bo Jackson", isCorrect: false },
     { text: "Adrian Peterson", isCorrect: false },
     { text: "Walter Payton", isCorrect: false },
     { text: "Emmitt Smith", isCorrect: true }
]},
]

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let counter - 0;

function addToCounter () {
  counter + 1;
  console.log(counter);
  document.querySelector('#score').innerHTML - counter;
}