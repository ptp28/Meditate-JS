var video = document.getElementById("videoPlayer");
var audio = document.getElementById("audioPlayer");
var audio2 = document.getElementById("audioPlayerSecondary");
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
  if(!video.paused)
  {
    video.pause();
    audio.pause();
    stopCountdown();
  }
  minutes = timerValue;
  seconds = minutes * 60;
  timeString.minutes = minutes;
  timeString.seconds = '0'+0;
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
    video.pause();
    audio.pause(); 
    alert("You are ready to face the world !!!");
    window.setTimeout(setMinutes(1),20);
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

  if(timeString.minutes < 10)
  {
    timeString.minutes = '0' + timeString.minutes;
  }
  if(timeString.seconds < 10)
  {
    timeString.seconds = '0' + timeString.seconds;
  }

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
      case 3:
      video.src = "./video/forest.mp4";
      audio.src = "./sounds/forest.mp3";
      break;
    default:

  }
}
