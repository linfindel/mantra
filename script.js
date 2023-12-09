let intensity;
let selectedMantra;

function setIntensity(selectedIntensity) {
    const repetitions = [10, 100, 1000, 10000, 100000];
    intensity = repetitions[selectedIntensity - 1];

    document.getElementById("intensities").remove();
    document.getElementById("mantras").style.display = "flex";
}

function setMantra(mantraIndex) {
    const mantras = [
        "Ribbit of Resilience, Chonk's Grace",
        "Embrace the Leap, Follow Chonk's Path",
        "Chonk's Serenity, GIF of Harmony",
        "In Chonk's GIF, Find Inner Peace",
        "Croak of Wisdom, Chonk Guides Us"
    ];
    selectedMantra = mantras[mantraIndex - 1];

    document.getElementById("mantras").remove();
    document.getElementById("welcome").remove();
    document.getElementById("input").focus();

    document.getElementById("progress-container").style.opacity = "1";

    let index = 0;
    let currentRep = 1;
    let totalProgress = 0;
    const repetitions = intensity; // Using the selected intensity
    const totalCharacters = selectedMantra.length * repetitions; // Total characters in the selected mantra and iterations

    const textDiv = document.getElementById('text');
    const inputField = document.getElementById('input');
    const progressBar = document.getElementById('progress');

    const updateText = () => {
        const visibleText = selectedMantra.substring(index);
        const remainingText = selectedMantra.substring(0, index);
        const expectedChar = selectedMantra.charAt(index);
        
        textDiv.innerHTML = `
            <span style="color: white;">${remainingText}</span>
            <span style="color: ${expectedChar === ' ' ? 'rgb(100, 100, 100)' : 'rgb(0, 89, 255)'};">${expectedChar}</span>
            <span style="color: rgb(100, 100, 100);">${visibleText.slice(1)}</span>
        `;
    };

    updateText();

    inputField.addEventListener("blur", () => {
        inputField.focus();
    })

    inputField.addEventListener('input', () => {
        const userInput = inputField.value;
        const expectedChar = selectedMantra.charAt(index);

        if (userInput.endsWith(expectedChar)) {
            index++;
            totalProgress++;
            progressBar.style.width = `${(totalProgress / totalCharacters) * 100}%`; // Update total progress
            
            if (index >= selectedMantra.length) {
                index = 0;
                currentRep++;
                if (currentRep > repetitions) {
                    document.body.innerHTML = `
                        <div class="card column">
                            <h1>Study complete</h1>

                            <button onclick="location.reload()">
                                <span class="material-symbols-rounded">refresh</span>
                                Reload
                            </button>
                        </div>
                    `;
                }
            }
            updateText();
        } else {
            inputField.value = userInput.slice(0, -1);
        }
    });
}