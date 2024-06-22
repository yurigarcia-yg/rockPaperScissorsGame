//need to start writing some code here for this rock paper scissors game.

let humanScore = 0;
let computerScore = 0;
let round = 1;

//need to get computer input
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  let choice;

  if (randomNumber <= 33) {
    choice = "rock";
  } else if (randomNumber <= 66) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}
//need to get human input
function getHumanChoice() {
  let choice = prompt(
    `Choose Rock, Paper, or Scissors - Round ${round} - Score: ${humanScore} - AI Score: ${computerScore}`,
    ""
  );
  if (choice === null) {
    return choice;
  }
  return choice.toLowerCase().trim();
}
//logic for the game

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === null) {
      break;
    } else if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    ) {
      alert("Not a valid choice, Game exiting. Refresh page to restart.");
      break;
    } else {
      playRound(humanChoice, computerChoice);
      round++;
    }
  }

  if (round === 6 && humanScore > computerScore) {
    alert(`Victory - Score: ${humanScore} - AI Score: ${computerScore}`);
  } else if (round === 6 && humanScore === computerScore) {
    alert(`Stalemate - Score: ${humanScore} - AI Score: ${computerScore}`);
  } else if (round === 6 && humanScore === computerScore) {
    alert(`Defeat - Score: ${humanScore} - AI Score: ${computerScore}`);
  }
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        alert("Round Loss! Paper beats rock");
        computerScore++;
      } else if (computerChoice === "rock") {
        alert("Round Draw! Rock can't beat rock");
        computerScore += 0.5;
        humanScore += 0.5;
      } else if (computerChoice === "scissors") {
        alert("Round Win! Rock beats scissors");
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        alert("Round Draw! Paper can't beat paper");
        computerScore += 0.5;
        humanScore += 0.5;
      } else if (computerChoice === "rock") {
        alert("Round Win! Paper beats rock");

        humanScore++;
      } else if (computerChoice === "scissors") {
        alert("Round Loss! Paper can't beat scissors");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        alert("Round Win! Scissors beats paper");
        humanScore++;
      } else if (computerChoice === "rock") {
        alert("Round Loss! Scissors can't beat");
        computerScore++;
      } else if (computerChoice === "scissors") {
        alert("Round Draw! Scissors can't beat scissors");
        computerScore += 0.5;
        humanScore += 0.5;
      }
    }
  }

  humanScore = 0;
  computerScore = 0;
  round = 1;
}

playGame();
