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
    buttonImage.src = "./svg/pause.svg";
    startCountdown();
  } else {
    video.pause();
    audio.pause();
    buttonImage.src = "./svg/play.svg";
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
  buttonImage.src = "./svg/play.svg";
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