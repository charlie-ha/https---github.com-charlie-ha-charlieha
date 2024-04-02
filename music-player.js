
function menu() {
  var x = document.getElementById("navigation");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
      }
}

let audioFile = document.getElementById("audio-file");
// audioFile.addEventListener("canplay", reportStatus);
audioFile.addEventListener("canplay", durationTimer);

// function reportStatus() {
//   let audioStatus = document.getElementById("audio-status");
//   audioStatus.innerText = "Audio is ready!";
// }

let playButton = document.getElementById("play-button");

playButton.addEventListener("click", playAudio);

function playAudio() {
  console.log("clicked play");
  audioFile.play();
  playButton.classList.add("inactive");
  pauseButton.classList.remove("inactive");
}

//

let pauseButton = document.getElementById("pause-button");

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  console.log("clicked pause");
  audioFile.pause();
  playButton.classList.remove("inactive");
  pauseButton.classList.add("inactive");
}

function updateProgress() {
  let progressBar = document.getElementById("progress-bar");
  progressBar.value = (audioFile.currentTime / audioFile.duration) * 100;
}
function waveForm() {
  // let waveformContainer = document.getElementById("waveform-container");
  // waveformContainer.style.setProperty(
  //   "width",
  //   (audioFile.currentTime / audioFile.duration) * 100 + "%"
  // );
  // console.log(
  //   "waveform" + (audioFile.currentTime / audioFile.duration) * 100 * 261
  // );
  let waveformContainer = document.getElementById("waveform-container");
  waveformContainer.style.setProperty(
    "width",
    (261 / audioFile.duration) * audioFile.currentTime + "px"
  );
}

updateProgress();
waveForm();

setInterval(updateProgress, 1000);
setInterval(waveForm, 1000);

let currentTime = 0;
let startTimer = document.getElementById("start-timer");
function updateTimer() {
  let currentTime = audioFile.currentTime;
  let minutes = Math.trunc(currentTime / 60);
  let seconds = Math.trunc(currentTime % 60);
  let timerReadout = minutes + ":" + seconds;
  if (seconds < 10) {
    timerReadout = minutes + ":0" + seconds;
  }
  startTimer.innerHTML = timerReadout;
}
setInterval(updateTimer, 1000);

let progressBar = document.getElementById("progress-bar");
function sliderMatch() {
  audioFile.currentTime = progressBar.value;
  // waveformContainer.setProperty.width(audioFile.currentTime / audioFile.duration * 100 + "%");
}
progressBar.addEventListener("input", sliderMatch);

let endTimer = document.getElementById("end-timer");
function durationTimer() {
  let durationTime = audioFile.duration;
  console.log(durationTime);
  let minutes = Math.trunc(durationTime / 60);
  let seconds = Math.trunc(durationTime % 60);
  let timerReadout = minutes + ":" + seconds;
  if (seconds < 10) {
    timerReadout = minutes + ":0" + seconds;
  }
  endTimer.innerHTML = timerReadout;
}

//background img, start the div with 0 width and then increase the width size with the time of the audio.

// waveformContainer.setProperty.width(currentTime + "px");

				
		