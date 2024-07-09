const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hiHat = document.getElementById("hiHat")
const kick = document.getElementById("kick")
const openHat = document.getElementById("openHat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

document.addEventListener("click", (event) => {
    boom.textContent = event.boom
    clap.textContent = event.clap
    hiHat.textContent = event.hiHat
    kick.textContent = event.kick
    openHat.textContent = event.openHat
    ride.textContent = event.ride
    snare.textContent = event.snare
    tink.textContent = event.tink
    tom.textContent = event.tom
} )