var clap = new Audio("Clap.wav")
var clapButton = document.getElementById('clap')
clapButton.addEventListener('click', (e)=>{
    e.preventDefault();
    clap.play();
})

var kick = new Audio("Kick.wav")
var kickButton = document.getElementById('kick')
kickButton.addEventListener('click', ()=>{
    kick.play();
})

var snare = new Audio("Snare.wav")
var snareButton = document.getElementById('snare')
snareButton.addEventListener('click', ()=>{
    snare.play();
})

var hihat = new Audio("Hi-hat.wav")
var hihatButton = document.getElementById('hi-hat')
hihatButton.addEventListener('click', ()=>{
    hihat.play();
})

var cymbol = new Audio('Crash.wav')
var cymbolButton = document.getElementById('cymbol')
cymbolButton.addEventListener('click', ()=>{
    cymbol.play();
})