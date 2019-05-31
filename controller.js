var video = document.getElementById("videoPlayer");
var audio = document.getElementById("audioPlayer");
var button = document.getElementById("playButton");
var buttonImage = document.getElementById("buttonState");
var minutes = 1;
var seconds = 60;
var timeString = {minutes: 0 , seconds: 0};

function startTimer() {
  if (video.paused) {
    video.play();
    audio.play();
    button.value = "Pause";
    buttonImage.src = "./images/pause.svg";
    startCountdown();
  } else {
    video.pause();
    audio.pause();
    buttonImage.src = "./images/play.svg";
    button.value = "Play";
    stopCountdown();
  }
}

function setMinutes(timerValue)
{
  minutes = timerValue;
  seconds = minutes * 60;
  timeString.minutes = minutes;
  timeString.seconds = 0;
  displayTime();
}

function startCountdown()
{
  timer = setInterval('decrementCounter()', 1000);
}

function stopCountdown()
{
  clearInterval(timer);
  video.pause();
  audio.pause();
  buttonImage.src = "./images/play.svg";
  button.value = "Play";
}

function decrementCounter()
{
  if(seconds <= 0)
  {
    alert("TIME UP");
    timeString.minutes = 00;
    timeString.seconds = 01;
    seconds = 1;
    stopCountdown();
  }

  timeString.minutes = Math.floor(seconds / 60);

  if(seconds % 60 == 0)
  {
    timeString.seconds = 60;
    timeString.minutes--;
  }
  timeString.seconds--;
  seconds--;

  displayTime();
}

function displayTime()
{
  document.getElementById("time").innerHTML = timeString.minutes + ":" + timeString.seconds;
}

function changeTheme(themeNumber)
{
  if(!video.paused)
  {
    video.pause();
    audio.pause();
    stopCountdown();
  }
  switch (themeNumber) {
      case 1:
       video.src = "./video/rain.mp4";
       audio.src = "./sounds/rain.mp3";
      break;
      case 2:
      video.src = "./video/beach.mp4";
      audio.src = "./sounds/beach.mp3";
      break;
    default:

  }
}
