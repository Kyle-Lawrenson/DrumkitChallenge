const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

// asked chatGPT how to do add sound on specific keydown (start)


function playAndStopAudio() {
    boomAudio.play();
    setTimeout(function() {
        boomAudio.pause();
        boomAudio.currentTime = 0;
    }, 2000); 

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
        playAndStopAudio();
    }
});

document.getElementById('playButton').addEventListener('click', function() {
    playAndStopAudio();
});


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
}