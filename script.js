const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")


document.addEventListener("keydown", (event) => {
    boom.textContent = event.boom
    clap.textContent = event.clap
    hihat.textContent = event.hihat
    kick.textContent = event.kick
    openhat.textContent = event.openhat
    ride.textContent = event.ride
    snare.textContent = event.snare
    tink.textContent = event.tink
    tom.textContent = event.tom
} )

document.addEventListener("click", (event) => {
    boom.textContent = event.boom
    clap.textContent = event.clap
    hihat.textContent = event.hihat
    kick.textContent = event.kick
    openhat.textContent = event.openhat
    ride.textContent = event.ride
    snare.textContent = event.snare
    tink.textContent = event.tink
    tom.textContent = event.tom
} )