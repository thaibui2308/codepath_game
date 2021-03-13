//Instance Variables
var patter = [2,4,2,1,3,1,1,4];
var progress = 0;
var isPlayingGame = false;

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");

const startGame = () => {
  isPlayingGame = true;
  progress = 0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}

const stopGame = () => {
  isPlayingGame = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}


startBtn.addEventListener("click",startGame);
stopBtn.addEventListener("click", stopGame);