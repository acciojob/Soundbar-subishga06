const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

// create buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAll();
        document.getElementById(sound).play();
    });

    buttonsDiv.appendChild(btn);
});

// stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopAll);
buttonsDiv.appendChild(stopBtn);

// stop all audios
function stopAll() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
