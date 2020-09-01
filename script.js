let gameResult = "",
  playerOutcome = "",
  roundResult = "",
  resultDescription = "",
  playerPoints = 0,
  computerPoints = 0,
  round = 0;

const playBtns = document.querySelectorAll("button.play");
const gameRound = document.querySelector("h2.game-round");
gameRound.textContent = `ROUND: ${round}`;
const computerMove = document.querySelector("li.computer-move");
const playerMove = document.querySelector("li.player-move");
const moveResult = document.querySelector("h3.move-result");
const gameResults = document.querySelector("h3.game-results");
const resetGameBtn = document.querySelector("button#reset-game-btn");
resetGameBtn.setAttribute("style", "display: none");

// Game Handling Methods
function computerPlay() {
  const CHOICES = ["rock", "paper", "scissors"];
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playGame() {
  gameResult =
    playerPoints > computerPoints
      ? `Player Wins! [${playerPoints} - ${computerPoints}]`
      : `Computer Wins! [${playerPoints} - ${computerPoints}]`;

  gameResults.textContent = gameResult;
  return gameResult;
}

function resetGame() {}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection == "rock") {
    playerSelection == "paper"
      ? ((playerOutcome = "win"), (resultDescription = "Paper WRAPS Rock"))
      : playerSelection == "scissors"
      ? ((playerOutcome = "loss"),
        (resultDescription = "Rock CRUSHES Scissors"))
      : (playerOutcome = "draw");
  }
  if (computerSelection == "paper") {
    playerSelection == "rock"
      ? ((playerOutcome = "loss"), (resultDescription = "Paper WRAPS Rock"))
      : playerSelection == "scissors"
      ? ((playerOutcome = "win"), (resultDescription = "Scissors CUTS Paper"))
      : (playerOutcome = "draw");
  }
  if (computerSelection == "scissors") {
    playerSelection == "rock"
      ? ((playerOutcome = "win"), (resultDescription = "Rock CRUSHES Scissors"))
      : playerSelection == "paper"
      ? ((playerOutcome = "loss"), (resultDescription = "Scissors CUTS Paper"))
      : (playerOutcome = "draw");
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
  }

  return roundResult;
}

// event listeners for game objects (buttons)
resetGameBtn.addEventListener("click", resetGame());

playBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let computerSelection = computerPlay();
    computerMove.textContent = "CPU Move: " + computerSelection.toString();
    let playerSelection = btn.textContent.toLowerCase();
    playerMove.textContent = "Your Move: " + playerSelection.toString();
    playRound(playerSelection, computerSelection);
    moveResult.textContent = roundResult;

    if (playerOutcome != "draw") {
      ++round;
    }

    gameRound.textContent = `ROUND: ${round}`;

    if (playerPoints + computerPoints == 5) {
      playGame();
      resetGameBtn.setAttribute("style", "display: inline-block");
    }
  });
});
