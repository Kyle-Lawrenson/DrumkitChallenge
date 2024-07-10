console.log("hello")

// makes boom sound

const boomButton = document.getElementById("boomButton")
let boom = new Audio("./sounds/boom.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'W') {
        boom.play()
    }
})
boomButton.addEventListener('click', () => {
    boom.play()
});

// makes clap sound
const clapButton = document.getElementById("clapButton")
let clap = new Audio("./sounds/clap.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        clap.play()
    }
})
clapButton.addEventListener('click', () => {
    clap.play()
});

// makes hihat sound
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

// makes kick sound
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

// makes openhat sound
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

// makes ride sound
const rideButton = document.getElementById("rideButton")
let ride = new Audio("./sounds/ride.wav")
document.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === 'E') {
        ride.play()
    }
})
rideButton.addEventListener('click', () => {
    ride.play()
});

// makes snare sound
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

// makes tink sound
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

// makes tom sound
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
