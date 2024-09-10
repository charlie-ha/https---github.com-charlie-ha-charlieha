function menu() {
    var x = document.getElementById("navigation");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        }
}
let button1 = document.getElementById("button-1");
function openAnswer() {
  let answer1 = document.getElementById("answer-1");
  answer1.classList.toggle("open-text");
  let activeBut1 = document.getElementById("button-1");
  activeBut1.classList.toggle("button-active");
  let opacityBut1 = document.getElementById("bottom-pawn");
  opacityBut1.classList.toggle("opacity-image");
}
button1.addEventListener("click", openAnswer);

let button2 = document.getElementById("button-2");
function openAnswerTwo() {
  let answer2 = document.getElementById("answer-2");
  answer2.classList.toggle("open-text");
  let activeBut2 = document.getElementById("button-2");
  activeBut2.classList.toggle("button-active");
  let opacityBut2 = document.getElementById("bottom-pawn-2");
  opacityBut2.classList.toggle("opacity-image");
}
button2.addEventListener("click", openAnswerTwo);

let button3 = document.getElementById("button-3");
function openAnswerThree() {
  let answer3 = document.getElementById("answer-3");
  answer3.classList.toggle("open-text");
  let activeBut3 = document.getElementById("button-3");
  activeBut3.classList.toggle("button-active");
  let opacityBut3 = document.getElementById("bottom-pawn-3");
  opacityBut3.classList.toggle("opacity-image");
}
button3.addEventListener("click", openAnswerThree);

let button4 = document.getElementById("button-4");
function openAnswerFour() {
  let answer4 = document.getElementById("answer-4");
  answer4.classList.toggle("open-text");
  let activeBut4 = document.getElementById("button-4");
  activeBut4.classList.toggle("button-active");
  let opacityBut4 = document.getElementById("bottom-pawn-4");
  opacityBut4.classList.toggle("opacity-image");
}
button4.addEventListener("click", openAnswerFour);

let button5 = document.getElementById("button-5");
function openAnswerFive() {
  let answer5 = document.getElementById("answer-5");
  answer5.classList.toggle("open-text");
  let activeBut5 = document.getElementById("button-5");
  activeBut5.classList.toggle("button-active");
  let opacityBut5 = document.getElementById("bottom-pawn-5");
  opacityBut5.classList.toggle("opacity-image");
}
button5.addEventListener("click", openAnswerFive);
