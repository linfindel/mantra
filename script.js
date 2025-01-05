// Initial element definitions
const circle = document.getElementById("circle");
const navbar = document.getElementById("navbar");
const hubButton = document.getElementById("hub");
const welcome = document.getElementById("welcome");
const intensities = document.getElementById("intensities");
const intensityButton1 = document.getElementById("intensity-button-1");
const intensityButton2 = document.getElementById("intensity-button-2");
const intensityButton3 = document.getElementById("intensity-button-3");
const intensityButton4 = document.getElementById("intensity-button-4");
const intensityButton5 = document.getElementById("intensity-button-5");

// Initial setup
document.body.style.cursor = "none";

document.body.style.overflow = "hidden";

document.body.style.width = "100vw";
document.body.style.height = "100vh";

setTimeout(() => {
    // Proverbial curtain pull
    document.body.style.cursor = "default";

    circle.style.display = "none";

    // UI reveal
    navbar.style.opacity = 1;
    navbar.style.transform = "translateY(0)";

    hubButton.style.opacity = 1;
    hubButton.style.transform = "translateX(0)";

    setTimeout(() => {
        welcome.style.opacity = 1;
        welcome.style.transform = "translateY(0)";
    }, 100);

    setTimeout(() => {
        intensities.style.opacity = 1;
        intensities.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        intensityButton1.style.opacity = 1;
        intensityButton1.style.transform = "translateX(0)";
    }, 700);

    setTimeout(() => {
        intensityButton2.style.opacity = 1;
        intensityButton2.style.transform = "translateX(0)";
    }, 800);

    setTimeout(() => {
        intensityButton3.style.opacity = 1;
        intensityButton3.style.transform = "translateX(0)";
    }, 900);

    setTimeout(() => {
        intensityButton4.style.opacity = 1;
        intensityButton4.style.transform = "translateX(0)";
    }, 1000);

    setTimeout(() => {
        intensityButton5.style.opacity = 1;
        intensityButton5.style.transform = "translateX(0)";
    }, 1100);
}, 2500);

let intensity;
let selectedMantra;

function setIntensity(selectedIntensity) {
    const repetitions = [10, 100, 1000, 10000, 100000];
    intensity = repetitions[selectedIntensity - 1];

    intensities.style.opacity = 0;

    setTimeout(() => {
        intensities.remove();

        document.getElementById("mantras").style.transition = "none";
        document.getElementById("mantras").style.opacity = 0;
        document.getElementById("mantras").style.display = "flex";
        document.getElementById("mantras").style.transition = "0.25s ease";
        
        setTimeout(() => {
            document.getElementById("mantras").style.opacity = 1;
        }, 100);
    }, 900);
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

    document.getElementById("mantras").style.opacity = 0;
    document.getElementById("welcome").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("mantras").remove();
        document.getElementById("welcome").remove();

        document.getElementById("input").focus();

        document.getElementById("progress-container").style.transition = "0.25s ease";
        document.getElementById("progress-container").style.opacity = "1";

        let index = 0;
    let currentRep = 1;
    let totalProgress = 0;
    const repetitions = intensity;
    const totalCharacters = selectedMantra.length * repetitions;

    const textDiv = document.getElementById('text');
    const inputField = document.getElementById('input');
    const progressBar = document.getElementById('progress');

    const updateText = () => {
        const visibleText = selectedMantra.substring(index);
        const remainingText = selectedMantra.substring(0, index);
        const expectedChar = selectedMantra.charAt(index);
        
        textDiv.innerHTML = `
            <span style="color: white;">${remainingText}</span><span style="color: ${expectedChar === ' ' ? 'rgb(100, 100, 100)' : 'rgb(136, 171, 80)'};">${expectedChar}</span><span style="color: rgb(100, 100, 100);">${visibleText.slice(1)}</span>
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
            progressBar.style.width = `${(totalProgress / totalCharacters) * 100}%`;
            
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
    }, 1000);
}

function hub() {
    // UI reveal
    navbar.style.opacity = 0;
    navbar.style.transform = "translateY(-10rem)";

    hubButton.style.opacity = 0;
    hubButton.style.transform = "translateX(-10rem)";

    setTimeout(() => {
        intensityButton1.style.opacity = 0;
        intensityButton1.style.transform = "translateX(-1rem)";
    }, 100);

    setTimeout(() => {
        intensityButton2.style.opacity = 0;
        intensityButton2.style.transform = "translateX(-1rem)";
    }, 200);

    setTimeout(() => {
        intensityButton3.style.opacity = 0;
        intensityButton3.style.transform = "translateX(-1rem)";
    }, 300);

    setTimeout(() => {
        intensityButton4.style.opacity = 0;
        intensityButton4.style.transform = "translateX(-1rem)";
    }, 400);

    setTimeout(() => {
        intensityButton5.style.opacity = 0;
        intensityButton5.style.transform = "translateX(-1rem)";
    }, 500);

    setTimeout(() => {
        welcome.style.opacity = 0;
        welcome.style.transform = "translateY(0)";
    }, 1000);

    setTimeout(() => {
        intensities.style.opacity = 0;
        intensities.style.transform = "translateY(0)";
    }, 1100);

    circle.style.opacity = 0;
    circle.style.display = "flex";
    circle.style.transition = "0.25s ease";

    setTimeout(() => {
        circle.style.animation = "frog-intro 0s ease";
        circle.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        location.href = "https://churchof-chonk.github.io/";
    }, 2000);
}