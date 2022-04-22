// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];

  const picked = options[Math.floor(Math.random() * options.length)];

  return picked;
}
function capitalizeInput(userInput) {
  const toLower = userInput.toLowerCase();
  return userInput.charAt(0).toUpperCase() + toLower.slice(1);
}

function playRound(playerSelection, computerSelection) {
  // Capitalize player input
  const playerInput = capitalizeInput(playerSelection);

  if (playerInput === computerSelection) {
    return `Draw! Player's Input (${playerInput}) is same as computer's Input (${computerSelection})`;
  } else if (
    (playerInput === "Rock" && computerSelection === "Scissors") ||
    (playerInput === "Paper" && computerSelection === "Rock") ||
    (playerInput === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Won! ${playerInput} beats ${computerSelection}`;
  } else if (
    (playerInput === "Rock" && computerSelection === "Paper") ||
    (playerInput === "Paper" && computerSelection === "Scissors") ||
    (playerInput === "Scissors" && computerSelection === "Rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerInput}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Type "Rock", "Paper" or "Scissors"`);

    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
