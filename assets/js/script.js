
/**
 * Declare constants for DOM elements and choices
 * 
 */
const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const messages =document.getElementById('messages');
const playerSetScore = document.getElementById('player-set-score');
const computerSetScore = document.getElementById('computer-set-score');
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Set choices 
const choices = ["rock","paper","scissors","lizard","spock"];
// on hash table of objects
const setChoice = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
  };
 /**
  * Add event listener to buttons
  */
 for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    });
 }
 /**
  * Main game function - accepts one paramater: data-choice value of selected button
  */
 resetAll();
 function playGame(playerChoice) {
    
    playerImage.src = `./assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random() * 5);

computerImage.src = `./assets/images/${choices[computerChoice]}.png`;
computerImage.alt = choices[computerChoice];
let result = checkWinner(choices[computerChoice], choices[playerChoice]);

/**
 * updates scrore for player and computer and updates messages
 */

 }
 /** Check winner -  first check if there is a tie and then 
  * compare player selection to computer selection using
  * indexOf on hash table of objects
  * Credit: https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript
  */
 function checkWinner(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        messages.innerText = "It's a Tie";
        return('Tie');
    } else {
        const choice = setChoice[playerSelection];
        if (choice.defeats.indexOf(computerSelection) > -1) {
            messages.textContent = 'Player Wins';
            playerScore.textContent = ++playerScore.textContent;
        } else {
            messages.textContent = 'Player Looses';
            computerScore.textContent = ++computerScore.textContent;
        }
    }
    if (playerScore.textContent === '7') {
        playerSetScore.textContent = ++playerSetScore.textContent;
        resetGame("Player Wins Set");
    } 
    if (computerScore.textContent === '7') {
        computerSetScore.textContent = ++computerSetScore.textContent;
        resetGame("Player Looses Set");
    }
    if (playerSetScore.textContent === '5') {
        playerImage.src = `assets/images/happy.png`;
        playerImage.alt = 'happy face';

        computerImage.src = `assets/images/happy.png`;
        computerImage.alt = 'happy face';
        resetGame("Player Wins Game");
    } 
    if (computerSetScore.textContent === '5') {
        playerImage.src = `assets/images/sad.png`;
        playerImage.alt = 'sad face';

        computerImage.src = `assets/images/sad.png`;
        computerImage.alt = 'sad face';
        resetGame("Player Looses Game");
    }
}
 
/**
 * Resets player and computer score variables, message and resets player and 
 * computer images to default start images
 */
function resetAll() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerSetScore.textContent = 0;
    computerSetScore.textContent = 0;
    messages.textContent = "New Game";

    playerImage.src = `assets/images/rps.png`;
    playerImage.alt = 'rock paper scissors lizard spock';

    computerImage.src = `assets/images/rps.png`;
    computerImage.alt = 'rock paper scissors lizard spock';

}
function resetGame(whoWins) {
    playerScore.textContent = 0;
    computerScore.textContent = 0;

    messages.textContent = whoWins;
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
     // run your open modal display function after 2 sec = 2000
     modal.style.display = "block";
    }, 2000)
   });


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}