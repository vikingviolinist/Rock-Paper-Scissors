// Generate a random computer selection
function computerPlay() {
const items = ["rock", "paper", "scissors"];
return items[Math.floor(Math.random() * 3)];
}

const $playerRock = $('.rock');
const $playerPaper = $('.paper');
const $playerScissors = $('.scissors');

// Change player selection icon on click
function imageChange() {
  $playerRock.on('click', () => {
    $('.playerSelection').attr('src', 'images/rock_lg.svg')
  });
  $playerPaper.on('click', () => {
    $('.playerSelection').attr('src', 'images/paper_lg.svg')
  });
  $playerScissors.on('click', () => {
    $('.playerSelection').attr('src', 'images/scissors_lg.svg')
  });
}

// Invoke functions on click
$playerRock.on('click', playRound, imageChange());
$playerPaper.on('click', playRound, imageChange());
$playerScissors.on('click', playRound, imageChange());

// Initialize values
let plays = 0;
let computerScore = 0;
let playerScore = 0;

// Play single round
function playRound(playerSelection, computerSelection) {
  playerSelection = this.className.toUpperCase();
  computerSelection = computerPlay().toUpperCase();
  plays++;
  $('.rounds').text('ROUND ' + plays);

// Change computer selection icon
  function computerImage(computerSelection) {
    if (computerSelection === "ROCK"){
      $('.computerSelection').attr('src', 'images/rock_lg.svg')
    } else if (computerSelection === "PAPER") {
      $('.computerSelection').attr('src', 'images/paper_lg.svg')
    } else {
      $('.computerSelection').attr('src', 'images/scissors_lg.svg')
    }
  }

  // Get result
  computerImage(computerSelection);
  if (playerSelection === 'ROCK' && computerSelection === 'ROCK' ||
    playerSelection === 'PAPER' && computerSelection === 'PAPER' ||
    playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
      $('.result').text('It\'s a draw!');

  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' ||
            playerSelection === 'PAPER' && computerSelection === 'SCISSORS' ||
            playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
              $('.result').text(`You lose!  ${computerSelection} beats ${playerSelection}`);
              computerScore++;

  } else {
      $('.result').text(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    }

    // Show score
    $('.playerScore').text(` ${playerScore}`);
    $('.computerScore').text(` ${computerScore}`);

    // Display winner of match and reset
    if (plays === 5) {
      if (playerScore < computerScore){
        $('.finalResult').text('You lost');
        $('.finalResult').css('color', '#f00');
      }
      if (playerScore > computerScore){
        $('.finalResult').text('You won!');
        $('.finalResult').css('color', '#0f0');
      }
      if (playerScore === computerScore){
        $('.finalResult').text('It\'s a tie!');
        $('.finalResult').css('color', '#00f');
      }

      // Reset buttons after five rounds
      $('.buttons').empty();

      // Display button to start a new game and reload page on click
      const btn = $('<button>');
      btn.addClass('restart')
        .text('Play again')
        .appendTo($('.restartButton'))
        .on('click', () => {
          location.reload();
        });

    }
}