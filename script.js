//Instance Variables
var clueHoldTime = 1000;
const cluePauseTime = 333; //Separation between each clue
const nextClueWaitTime = 1000; //Specify how long to wait before next clue playing


var pattern = [];
for (let i = 0; i <8; i++)
  pattern.push(Math.floor(Math.random()*5)+1);
for (let i=0;i<8;i++)
  console.log(pattern[i])
var progress = 0;
var isPlayingGame = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;
var chance;
var mistake ;

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var buttonList = document.getElementsByClassName("btn");

//Generate Random pattern 

//when the Start and Stop button clicked
const startGame = () => {
  isPlayingGame = true;
  mistake = 0;
  chance = 3;
  progress = 0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("chances_left").classList.remove("hidden");
  playClueSequence();
}

const stopGame = () => {
  isPlayingGame = false;
  document.getElementById("chances_left").classList.add("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  chance = 0;
}


startBtn.addEventListener("click",startGame);
stopBtn.addEventListener("click", stopGame);

// Sound Synthesis Functions
const freqMap = {
  1: 270,
  2: 350,
  3: 430,
  4: 470,
  5: 550
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  addImage(btn);
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(btn){
    removeImage(btn);
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
  guessCounter = 0;
  
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playinSingleClue,delay,pattern[i]) 
    clueHoldTime -= 20;
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
}

var chanceTracker = document.getElementById("chances_left")


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
    snd.play();
    mistake++;
    chanceTracker.innerText = 'Chances left: '+(chance-mistake);
    if (chance-mistake == 1)
      chanceTracker.classList.add("alert");
    if (mistake == chance){
      chanceTracker.innerText = 'Chances left: ' + 3;
      chanceTracker.classList.remove("alert");
      loseGame();
    }
  }
}    

function addImage(btn) {
  var targetedBtn = document.getElementById("imgButton"+btn);
  targetedBtn.classList.remove("hidden");
  targetedBtn.classList.add("image");
}

function removeImage(btn) {
  var targetedBtn = document.getElementById("imgButton"+btn);
  targetedBtn.classList.add("hidden");
  targetedBtn.classList.remove("image");
}

 var snd = new Audio("https://cdn.glitch.com/34c1a5f6-48b0-4f14-b6e0-9d0564f1557f%2FBruh-Sound-Effect.mp3?v=1615794546236");




