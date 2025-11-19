// List of sound names (same as file names inside /sounds folder)
const sounds = ["clap", "hihat", "kick", "snare", "tom"];

const buttonsDiv = document.getElementById("buttons");

// Create sound buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAllSounds();
        const audio = new Audio(`./sounds/${sound}.wav`);
        audio.play();
        currentAudio = audio;
    });

    buttonsDiv.appendChild(btn);
});

// Create STOP button
let currentAudio = null;

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "STOP";

stopBtn.addEventListener("click", () => {
    stopAllSounds();
});

buttonsDiv.appendChild(stopBtn);

// Function to stop audio
function stopAllSounds() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

