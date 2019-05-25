var video = document.getElementById("videoPlayer");
var btn = document.getElementById("playButton");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.value = "Pause";
  } else {
    video.pause();
    btn.value = "Play";
  }
}
