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

let playerchoice = prompt("Enter your choice (rock, paper, scissors):");
if (playerchoice !== null && playerchoice.trim() !== "") {
  console.log(playerchoice);
} else {
  console.log("Aucun mot saisi");
  playerchoice = prompt("Enter your choice (rock, paper, scissors):");
}


let computerchoice = getcomputerchoice();
if (playerchoice === computerchoice) {
  console.log("It's a tie!");
} else if (
  (playerchoice === "rock" && computerchoice === "scissors") ||
  (playerchoice === "paper" && computerchoice === "rock") ||
  (playerchoice === "scissors" && computerchoice === "paper")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}