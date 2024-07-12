console.log("hello")

// Helper function to handle button press effect
function handleButtonPress(button) {
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 200); // button changes colour for this amount of time
    
}

// makes the boom sound
const boomButton = document.getElementById("boomButton");
let boom = new Audio("./sounds/boom.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'W') {
        boom.play(); // plays this sound once the event happens in this case its keypress
        
        handleButtonPress(boomButton);
    }
});
boomButton.addEventListener('click', () => {
    boom.play(); // plays this sound once the event happens in this case its click
    handleButtonPress(boomButton);
});

// makes the clap sound
const clapButton = document.getElementById("clapButton");
let clap = new Audio("./sounds/clap.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        clap.play();
        handleButtonPress(clapButton);
    }
});
clapButton.addEventListener('click', () => {
    clap.play();
    handleButtonPress(clapButton);
});

// makes the hihat sound
const hihatButton = document.getElementById("hihatButton");
let hihat = new Audio("./sounds/hihat.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 's' || event.key === 'S') {
        hihat.play();
        handleButtonPress(hihatButton);
    }
});
hihatButton.addEventListener('click', () => {
    hihat.play();
    handleButtonPress(hihatButton);
});

// makes the kick sound
const kickButton = document.getElementById("kickButton");
let kick = new Audio("./sounds/kick.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'D') {
        kick.play();
        handleButtonPress(kickButton);
    }
});
kickButton.addEventListener('click', () => {
    kick.play();
    handleButtonPress(kickButton);
});

// makes the openhat sound
const openhatButton = document.getElementById("openhatButton");
let openhat = new Audio("./sounds/openhat.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'q' || event.key === 'Q') {
        openhat.play();
        handleButtonPress(openhatButton);
    }
});
openhatButton.addEventListener('click', () => {
    openhat.play();
    handleButtonPress(openhatButton);
});

// makes the ride sound
const rideButton = document.getElementById("rideButton");
let ride = new Audio("./sounds/ride.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === 'E') {
        ride.play();
        handleButtonPress(rideButton);
    }
});
rideButton.addEventListener('click', () => {
    ride.play();
    handleButtonPress(rideButton);
});

// makes the snare sound
const snareButton = document.getElementById("snareButton");
let snare = new Audio("./sounds/snare.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'z' || event.key === 'Z') {
        snare.play();
        handleButtonPress(snareButton);
    }
});
snareButton.addEventListener('click', () => {
    snare.play();
    handleButtonPress(snareButton);
});

// makes the tink sound
const tinkButton = document.getElementById("tinkButton");
let tink = new Audio("./sounds/tink.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'x' || event.key === 'X') {
        tink.play();
        handleButtonPress(tinkButton);
    }
});
tinkButton.addEventListener('click', () => {
    tink.play();
    handleButtonPress(tinkButton);
});

// makes the tom sound
const tomButton = document.getElementById("tomButton");
let tom = new Audio("./sounds/tom.wav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
        tom.play();
        handleButtonPress(tomButton);
    }
});
tomButton.addEventListener('click', () => {
    tom.play();
    handleButtonPress(tomButton);
});

document.addEventListener('keydown', (event) => {
    const messageDiv = document.getElementById('message');

    if (event.key !== 'q' && event.key !== 'Q' && event.key !== 'w' && event.key !== 'W' && event.key !== 'e' && event.key !== 'E' && event.key !== 'a' && event.key !== 'A' && event.key !== 's' && event.key !== 'S' && event.key !== 'd' && event.key !== 'D' && event.key !== 'z' && event.key !== 'Z' && event.key !== 'x' && event.key !== 'X' && event.key !== 'c' && event.key !== 'C') {
        messageDiv.innerText = 'INVALID KEY PRESS!'; // this tells it that if none of these keys are pressed the it displays message
        document.body.style.backgroundColor = 'indianred'; // changes the background color
    } else {
        messageDiv.innerText = '';
        document.body.style.backgroundColor = ''; // resets the background color
    }
});