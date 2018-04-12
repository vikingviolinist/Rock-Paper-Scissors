// Generates a random computer selection
function computerPlay() {
const items = ["rock", "paper", "scissor"];
return items[Math.floor(Math.random() * 3)];
}

// Changes player selection icon
function imageChange() {
  const playerRock = document.querySelector('.rock');
  playerRock.addEventListener('click', () => {document.querySelector('.playerSelection').src='images/rock_player.svg';});
  const playerPaper = document.querySelector('.paper');
  playerPaper.addEventListener('click', () => {document.querySelector('.playerSelection').src='images/paper_player.svg';});
  const playerScissor = document.querySelector('.scissor');
  playerScissor.addEventListener('click', () => {document.querySelector('.playerSelection').src='images/scissors_player.svg';});
}

// Invokes functions on click
const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', playRound, imageChange());
const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', playRound, imageChange());
const playerScissor = document.querySelector('.scissor');
playerScissor.addEventListener('click', playRound, imageChange());

// Initializes values
let plays = 0;
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = this.className.toUpperCase();
  computerSelection = computerPlay().toUpperCase();
  plays++;

  document.querySelector('.rounds').textContent="ROUND " + plays;

// Changes computer selection icon
  function computerImage(computerSelection){
    if(computerSelection == "ROCK"){
      document.querySelector('.computerSelection').src='images/rock_computer.svg';
    }else if(computerSelection == "PAPER"){
      document.querySelector('.computerSelection').src='images/paper_computer.svg';
    }else{
      document.querySelector('.computerSelection').src='images/scissors_computer.svg';
    }
  }

  computerImage(computerSelection);
  //get results
  if(playerSelection === "ROCK" && computerSelection === "ROCK" ||
   playerSelection === "PAPER" && computerSelection === "PAPER" ||
   playerSelection === "SCISSOR" && computerSelection === "SCISSOR"){
     document.querySelector('.result').textContent="It\'s a draw!";

    }else if(playerSelection === "ROCK" && computerSelection === "PAPER" ||
             playerSelection === "PAPER" && computerSelection === "SCISSOR" ||
             playerSelection === "SCISSOR" && computerSelection === "ROCK"){
               document.querySelector('.result').textContent="You lose! " + computerSelection + " beats " + playerSelection;
               computerScore++;

        }else{
          document.querySelector('.result').textContent="You win! " + playerSelection + " beats " + computerSelection;
          playerScore++;
        }
        //display score results
        document.querySelector('.playerScore').textContent="  " + playerScore;
        document.querySelector('.computerScore').textContent="  " + computerScore;

        //display winner of match and reset
        if(plays == 5){
          if (playerScore < computerScore){
            document.querySelector('.finalResult').textContent="You lost";
            document.querySelector('.finalResult').style.color="#ff0000";
          }
          if (playerScore > computerScore){
            document.querySelector('.finalResult').textContent="You won!";
            document.querySelector('.finalResult').style.color="#00ff00";
          }
          if (playerScore == computerScore){
            document.querySelector('.finalResult').textContent="It\'s a tie!";
            document.querySelector('.finalResult').style.color="#0000ff";
          }

          //remove buttons and result notes at the end of 5 rounds
          //create new button to reload page
          var elem = document.querySelector('.buttons');
          elem.parentNode.removeChild(elem);
          var elem = document.querySelector('.result');
          elem.parentNode.removeChild(elem);
          const butt = document.createElement('button');
          butt.classList.add('restart');
          butt.textContent='Play again';
          butt.setAttribute('style','font-size:2.5em;')
          const startNew = document.querySelector('.restartButton');
          startNew.appendChild(butt);

          //reload page
          butt.addEventListener('click', () => {
            location.reload();
          });
        }
}