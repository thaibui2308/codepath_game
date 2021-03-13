//Instance Variables
const clueHoldTime = 1000;
const cluePauseTime = 350; //Separation between each clue
const nextClueWaitTime = 1000; //Specify how long to wait before next clue playing
 

var pattern = [2,4];
var progress = 0;
var isPlayingGame = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var buttonList = document.getElementsByClassName("btn");

//when the Start and Stop button clicked
const startGame = () => {
  isPlayingGame = true;
  progress = 0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

const stopGame = () => {
  isPlayingGame = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}


startBtn.addEventListener("click",startGame);
stopBtn.addEventListener("click", stopGame);

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//Clearing a button
const lightButton = index => {
  document.getElementById("button"+index).classList.add("lit");
}

const clearButton = index => {
  document.getElementById("button"+index).classList.remove("lit");
}

//Real part of the game
const playinSingleClue = (index) => {
  if (isPlayingGame) {
    lightButton(index);
    playTone(index, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, index);
  }
}
//Check user response
const loseGame = () => {
  stopGame();
  alert("Oops! You lost :(");
}
const winGame = () => {
  stopGame();
  alert("Yay! You won :)");
}

function playClueSequence(){
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playinSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(!isPlayingGame){
    return;
  }

  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}    




