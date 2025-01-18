// JavaScript function to jump to specific time
function jumpTo(seconds) {
  const video = document.getElementById("grillAWarfareFull");
  video.currentTime = seconds;
  video.play();
}
