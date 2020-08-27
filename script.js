function computerPlay() {
  const CHOICES = ["rock", "paper", "scissors"];
  return Math.floor(Math.random() * CHOICES.length);
}

let gameResult = "",
  playerOutcome = "",
  roundResult = "",
  resultDescription = "",
  playerPoints = 0,
  computerPoints = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection == 0) {
    playerSelection == "paper"
      ? ((playerOutcome = "win"), (resultDescription = "Paper WRAPS Rock"))
      : playerSelection == "scissors"
      ? ((playerOutcome = "loss"),
        (resultDescription = "Rock CRUSHES Scissors"))
      : playerSelection == "rock"
      ? (playerOutcome = "draw")
      : (playerOutcome = "invalid");
  }
  if (computerSelection == 1) {
    playerSelection == "rock"
      ? ((playerOutcome = "loss"), (resultDescription = "Paper WRAPS Rock"))
      : playerSelection == "scissors"
      ? ((playerOutcome = "win"), (resultDescription = "Scissors CUTS Paper"))
      : playerSelection == "paper"
      ? (playerOutcome = "draw")
      : (playerOutcome = "invalid");
  }
  if (computerSelection == 2) {
    playerSelection == "rock"
      ? ((playerOutcome = "win"), (resultDescription = "Rock CRUSHES Scissors"))
      : playerSelection == "paper"
      ? ((playerOutcome = "loss"), (resultDescription = "Scissors CUTS Paper"))
      : playerSelection == "scissors"
      ? (playerOutcome = "draw")
      : (playerOutcome = "invalid");
  }

  switch (playerOutcome) {
    case "draw":
      roundResult = `It\'s a TIE`;
      break;
    case "win":
      roundResult = `You WIN: ${resultDescription}`;
      playerPoints++;
      break;
    case "loss":
      roundResult = `You LOOSE: ${resultDescription}`;
      computerPoints++;
      break;

    case "invalid":
      roundResult = `Your input was INVALID : Please select a valid choice!`;
      break;
  }

  return roundResult;
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter your choice: ", "");

    console.log(playRound(playerSelection, computerSelection));
    if (playerOutcome == "invalid" || playerOutcome == "draw") {
      --round;
    }
  }

  gameResult =
    playerPoints > computerPoints
      ? `Player Wins! [${playerPoints} - ${computerPoints}]`
      : `Computer Wins! [${playerPoints} - ${computerPoints}]`;
  return gameResult;
}

console.log(playGame());
