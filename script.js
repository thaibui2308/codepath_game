//Instance Variables
var patter = [2,4,2,1,3,1,1,4];
var progress = 0;
var isPlayingGame = false;
var tonePlaying = false;
var volume = 0.5; 

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

const addSound = (item, index) => {
  item.addEventListerner("mousedown",startTone(index));
  item.addEventListerner("mouseup",stopTone(index));
  
}

const interactiveBtn = document.getElementsByClassName("playinBtn");
interactiveBtn.forEach(addSound);

