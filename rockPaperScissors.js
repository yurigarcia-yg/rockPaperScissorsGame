//need to start writing some code here for this rock paper scissors game.

let humanScore = 0;
let computerScore = 0;
let round = 2;

//music and sounds
let rockSound = new Audio("./music/rock.mp3");
let paperSound = new Audio("./music/paper.mp3");
let scissorsSound = new Audio("./music/scissors.mp3");
let clapping = new Audio("./music/clapping.mp3");
document.addEventListener("click", () => {
  let backgroundMusic = document.querySelector(".background-music");
  backgroundMusic.volume = 0.2;
  backgroundMusic.play();
});
//DOM manipulation
let results = document.querySelector(".results");
let rock = document.querySelector(".rock-img");
let paper = document.querySelector(".paper-img");
let scissors = document.querySelector(".scissors-img");
let buttonsArray = [rock, paper, scissors];

let newGame = document.querySelector(".new-game");

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

//logic for the game

function playGame() {
  startGame();

  //starts new game
  newGame.addEventListener("click", () => {
    results.innerHTML = `<span class="divider">|</span>
          Choose Your Fighter! <span class="divider">|</span> Best of 5 Rounds
          
          Wins <span class="divider">|</span> Round: 1
          <span class="divider">|</span>`;
    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissors.style.pointerEvents = "auto";
    rock.src = "./rps-colors/rock-black.svg";
    paper.src = "./rps-colors/paper-black.svg";
    scissors.src = "./rps-colors/scissors-black.svg";
    humanScore = 0;
    computerScore = 0;
    round = 2;
    newGame.style.backgroundColor = "blue";
    setTimeout(() => {
      newGame.style.backgroundColor = "white";
    }, 500);
  });

  //round functionality

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        results.innerHTML = `<span class="divider">|</span> Round Loss! <span class="divider">|</span> Paper beats rock <span class="divider">|</span>`;
        rock.src = "./rps-colors/rock-red.svg";
        computerScore++;
      } else if (computerChoice === "rock") {
        results.innerHTML = `<span class="divider">|</span>Round Draw! <span class="divider">|</span> Rock can't beat rock <span class="divider">|</span>`;
        rock.src = "./rps-colors/rock-gray.svg";
      } else if (computerChoice === "scissors") {
        results.innerHTML = `<span class="divider">|</span> Round Win! <span class="divider">|</span> Rock beats scissors <span class="divider">|</span>`;
        rock.src = "./rps-colors/rock-green.svg";
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        results.innerHTML = `<span class="divider">|</span> Round Draw! <span class="divider">|</span> Paper can't beat paper <span class="divider">|</span>`;
        paper.src = "./rps-colors/paper-gray.svg";
      } else if (computerChoice === "rock") {
        results.innerHTML = `<span class="divider">|</span> Round Win! <span class="divider">|</span> Paper beats rock <span class="divider">|</span>`;
        paper.src = "./rps-colors/paper-green.svg";
        humanScore++;
      } else if (computerChoice === "scissors") {
        results.innerHTML = `<span class="divider">|</span>Round Loss! <span class="divider">|</span> Paper can't beat scissors <span class="divider">|</span>`;
        paper.src = "./rps-colors/paper-red.svg";
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        results.innerHTML = `<span class="divider">|</span> Round Win! <span class="divider">|</span> Scissors beats paper <span class="divider">|</span>`;
        scissors.src = "./rps-colors/scissors-green.svg";
        humanScore++;
      } else if (computerChoice === "rock") {
        results.innerHTML = `<span class="divider">|</span>Round Loss! <span class="divider">|</span> Scissors can't beat <span class="divider">|</span>`;
        scissors.src = "./rps-colors/scissors-red.svg";
        computerScore++;
      } else if (computerChoice === "scissors") {
        results.innerHTML = `<span class="divider">|</span> Round Draw! <span class="divider">|</span> Scissors can't beat scissors <span class="divider">|</span>`;
        scissors.src = "./rps-colors/scissors-gray.svg";
      }
    }
  }

  function startGame() {
    for (i = 0; i < buttonsArray.length; i++) {
      buttonsArray[i].addEventListener("click", (e) => {
        let target = e.target.closest("img");
        let choice = target.id;
        let option = "";
        if (choice === "rock-img") {
          option = "rock";
          choice = rock;
          rock.style.pointerEvents = "none";
          paper.style.pointerEvents = "none";
          scissors.style.pointerEvents = "none";
          rockSound.play();
          newGame.disabled = true;
          newGame.style.color = "black";
        } else if (choice === "paper-img") {
          option = "paper";
          choice = paper;
          rock.style.pointerEvents = "none";
          paper.style.pointerEvents = "none";
          scissors.style.pointerEvents = "none";
          paperSound.play();
          newGame.disabled = true;
          newGame.style.color = "black";
        } else if (choice === "scissors-img") {
          option = "scissors";
          choice = scissors;
          rock.style.pointerEvents = "none";
          paper.style.pointerEvents = "none";
          scissors.style.pointerEvents = "none";
          scissorsSound.play();
          newGame.disabled = true;
          newGame.style.color = "black";
        }

        playRound(option, getComputerChoice());

        if (round > 5) {
          if (humanScore > computerScore) {
            results.innerHTML = `<span class="divider">|</span> Victory! <span class="divider">|</span> Player Score: ${humanScore} <span class="divider">|</span>
    AI Score: ${computerScore} <span class="divider">|</span>`;
            rock.style.pointerEvents = "none";
            paper.style.pointerEvents = "none";
            scissors.style.pointerEvents = "none";
            rock.src = "./rps-colors/rock-green.svg";
            paper.src = "./rps-colors/paper-green.svg";
            scissors.src = "./rps-colors/scissors-green.svg";
            newGame.disabled = false;
            clapping.play();
          } else if (humanScore < computerScore) {
            results.innerHTML = `<span class="divider">|</span> Defeat! <span class="divider">|</span> Player Score: ${humanScore} <span class="divider">|</span>
    AI Score: ${computerScore} <span class="divider">|</span>`;
            rock.style.pointerEvents = "none";
            paper.style.pointerEvents = "none";
            scissors.style.pointerEvents = "none";
            rock.src = "./rps-colors/rock-red.svg";
            paper.src = "./rps-colors/paper-red.svg";
            scissors.src = "./rps-colors/scissors-red.svg";
            newGame.disabled = false;
          } else if (humanScore === computerScore) {
            results.innerHTML = `<span class="divider">|</span> Stalemate <span class="divider">|</span> Player Score: ${humanScore} <span class="divider">|</span>
    AI Score: ${computerScore} <span class="divider">|</span>`;
            rock.style.pointerEvents = "none";
            paper.style.pointerEvents = "none";
            scissors.style.pointerEvents = "none";
            rock.src = "./rps-colors/rock-gray.svg";
            paper.src = "./rps-colors/paper-gray.svg";
            scissors.src = "./rps-colors/scissors-gray.svg";
            newGame.disabled = false;
          }
        } else {
          choice.style.pointerEvents = "none";
          setTimeout(() => {
            results.innerHTML = `<span class="divider">|</span> Round: ${round} <span class="divider">|</span> Player Score: ${humanScore} <span class="divider">|</span> AI Score: ${computerScore} <span class="divider">|</span>`;
            round++;

            if (choice === rock || choice === paper || choice === scissors) {
              choice.src = `./rps-colors/${option}-black.svg`;
              rock.style.pointerEvents = "auto";
              paper.style.pointerEvents = "auto";
              scissors.style.pointerEvents = "auto";
              newGame.disabled = false;
            }
          }, 1500);
        }
      });
    }
  }
}

playGame();
