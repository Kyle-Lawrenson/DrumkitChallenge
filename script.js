console.log("hello")

const boomButton = document.getElementById("boomButton")
let boom = new Audio("./sounds/boom.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'W') {
        boom.play()
    }})
boomButton.addEventListener('click', () => {
    boom.play()
});

const clapButton = document.getElementById("clapButton")
let clap = new Audio("./sounds/clap.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        clap.play()
    }})
clapButton.addEventListener('click', () => {
    clap.play()
});

const hihatButton = document.getElementById("hihatButton")
let hihat = new Audio("./sounds/hihat.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 's' || event.key === 'S') {
        hihat.play()
    }
})
hihatButton.addEventListener('click', () => {
    hihat.play()
});

const kickButton = document.getElementById("kickButton")
let kick = new Audio("./sounds/kick.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'D') {
        kick.play()
    }
})
kickButton.addEventListener('click', () => {
    kick.play()
});

const openhatButton = document.getElementById("openhatButton")
let openhat = new Audio("./sounds/openhat.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'q' || event.key === 'Q') {
        openhat.play()
    }
})
openhatButton.addEventListener('click', () => {
    openhat.play()
});

const rideButton = document.getElementById("rideButon")
let ride = new Audio("./sounds/ride.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === 'E') {
        ride.play()
    }
})
rideButton.addEventListener('click', () => {
    ride.play()
});

const snareButton = document.getElementById("snareButton")
let snare = new Audio("./sounds/snare.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'z' || event.key === 'Z') {
        snare.play()
    }
})
snareButton.addEventListener('click', () => {
    snare.play()
});

const tinkButton = document.getElementById("tinkButton")
let tink = new Audio("./sounds/tink.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'x' || event.key === 'X') {
        tink.play()
    }
})
tinkButton.addEventListener('click', () => {
    tink.play()
});

const tomButton = document.getElementById("tomButton")
let tom = new Audio("./sounds/tom.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
        tom.play()
    }
})
tomButton.addEventListener('click', () => {
    tom.play()
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
