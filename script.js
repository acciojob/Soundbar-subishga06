const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const container = document.getElementById("buttons");

let currentSound = null;

// Create sound buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSound();
        currentSound = new Audio(`./sounds/${sound}.mp3`);
        currentSound.play();
    });

    container.appendChild(btn);
});

// Create STOP button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "stop";

stopButton.addEventListener("click", stopSound);

container.appendChild(stopButton);

// Stop function
function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
}
