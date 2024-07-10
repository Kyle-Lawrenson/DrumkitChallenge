console.log("hello")

const boomButton = document.getElementById("boomButton")
const clapButton = document.getElementById("clapButton")
const hihatButton = document.getElementById("hihatButton")
const kickButton = document.getElementById("kickButton")
const openhatButton = document.getElementById("openhatButton")
const rideButton = document.getElementById("rideButon")
const snareButton = document.getElementById("snareButton")
const tinkButton = document.getElementById("tinkButton")
const tomButton = document.getElementById("tomButton")

let boom = new Audio("./sounds/boom.wav")
let clap = new Audio("./sounds/clap.wav")
let hihat = new Audio("./sounds/hihat.wav")
let kick = new Audio("./sounds/kick.wav")
let openhat = new Audio("./sounds/openhat.wav")
let ride = new Audio("./sounds/ride.wav")
let snare = new Audio("./sounds/snare.wav")
let tink = new Audio("./sounds/tink.wav")
let tom = new Audio("./sounds/tom.wav")



document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'W') {
        boom.play()
    }})
boomButton.addEventListener('click', () => {
    boom.play()
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        clap.play()
    }
})


clapButton.addEventListener('click', () => {
    clap.play()
});



// asked chatGPT how to do add sound on specific keydown (start)

// function playAndStopAudio(sound) {
//     sound.play();
//     // setTimeout(function() {
//     //     sound.pause();
//     //     sound.currentTime = 0;
//     // }, 2000); 
// }

// chatGPT (end)

// document.addEventListener("keydown", (event) => {
//     boom.textContent = event.boom
//     clap.textContent = event.clap
//     hihat.textContent = event.hihat
//     kick.textContent = event.kick
//     openhat.textContent = event.openhat
//     ride.textContent = event.ride
//     snare.textContent = event.snare
//     tink.textContent = event.tink
//     tom.textContent = event.tom
// } ),

// document.addEventListener("click", (event) => {
//     boom.textContent = event.boom
//     clap.textContent = event.clap
//     hihat.textContent = event.hihat
//     kick.textContent = event.kick
//     openhat.textContent = event.openhat
//     ride.textContent = event.ride
//     snare.textContent = event.snare
//     tink.textContent = event.tink
//     tom.textContent = event.tom
// } ) 
