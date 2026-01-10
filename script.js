function getcomputerchoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let playerchoi = "";
const count = { player: 0, computer: 0, tie: 0 };
let round = 1;

const container = document.querySelector("#container");
const roundDisplay = document.querySelector("#round");

// score et reset
const score = document.createElement("p");
container.appendChild(score);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.style.display = "none";
container.appendChild(resetBtn);

function updateScore() {
    score.textContent = `Player: ${count.player} | Computer: ${count.computer} | Tie: ${count.tie}`;
}

function disableButtons() {
    // désactiver uniquement les boutons de jeu
    buttons.forEach(btn => btn.disabled = true);

    // garder le reset visible et activé
    resetBtn.style.display = "inline-block";
    resetBtn.disabled = false; // FIX : s’assurer qu’il est cliquable
}


resetBtn.addEventListener("click", () => {
    location.reload(); // FIX : recharge la page
});


const buttons = document.querySelectorAll("button");

function playerchoice() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (count.player < 5 && count.computer < 5) {
                playerchoi = button.id;
                playgame();
            }
        });
    });
}

function playgame() {
    const computerchoice = getcomputerchoice();
    let result = "";

    if (playerchoi === computerchoice) {
        result = "tie";
        count.tie++;
    } else if (
        (playerchoi === "rock" && computerchoice === "scissors") ||
        (playerchoi === "paper" && computerchoice === "rock") ||
        (playerchoi === "scissors" && computerchoice === "paper")
    ) {
        result = "player";
        count.player++;
    } else {
        result = "computer";
        count.computer++;
    }

    // ajouter résultat du round sans effacer le précédent
    const roundResult = document.createElement("p");
    roundResult.textContent = `Round ${round} → Player: ${playerchoi} | Computer: ${computerchoice} | Winner: ${result}`;
    roundResult.style.animation = "fade 0.4s ease-in-out";
    container.appendChild(roundResult);

    updateScore();

    // vérifier victoire finale
    if (count.player === 5 || count.computer === 5) {
        const winner = count.player === 5 ? "player" : "computer";
        const p = document.createElement("h2");
        p.textContent = `${winner} wins the game 🏆`;
        container.appendChild(p);
        disableButtons();
    }

    // incrémenter le round
    round++;
    roundDisplay.textContent = "Round : " + round;
}

// Lancer le jeu
playerchoice();
updateScore();
