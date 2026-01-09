function getcomputerchoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerchoice() {
    let player = prompt("Enter your choice (rock, paper, scissors):");
    if (player !== null && player.trim() !== "") {
        return player.toLowerCase().trim();
    } else {
        return null;
    }
}

function playgame() {
    let player = playerchoice();        // ✅ nom corrigé
    let computerchoice = getcomputerchoice();
    let result = "";

    if (player === null) {
        return "Invalid input";
    }

    console.log("Player choice: " + player);
    console.log("Computer choice: " + computerchoice);

    if (player === computerchoice) {
        result = "It's a tie!";
    } else if (
        (player === "rock" && computerchoice === "scissors") ||
        (player === "paper" && computerchoice === "rock") ||
        (player === "scissors" && computerchoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    return result;
}

function playround() {
    let finalresult = [];

    for (let i = 0; i < 5; i++) {
        let gameResult = playgame();   // ✅ appelé une seule fois
        console.log(gameResult);
        finalresult.push(gameResult);
    }
    return finalresult;
}

console.log(playround());
