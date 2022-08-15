console.log("link is working");
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
 messages.innerText = 'New Game';
 const choices = ["rock","paper","scissors","lizard","spock"];
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
 function playGame(playerChoice) {
    
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random() * 5);

computerImage.src = `assets/images/${choices[computerChoice]}.png`;
computerImage.alt = choices[computerChoice];
let result = checkWinner(choices[computerChoice], choices[playerChoice]);

updateScores(result);
 }
 function checkWinner(computerSelection, playerSelection) {
    console.log(computerSelection);
    console.log(playerSelection);
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
 }
function updateScores(result) {
    console.log(result);
}
function resetAll() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;

    messages.textContent = "New Game";

    playerImage.src = `assets/images/rps.png`;
    playerImage.alt = 'rock paper scissors lizard spock';

    computerImage.src = `assets/images/rps.png`;
    computerImage.alt = 'rock paper scissors lizard spock';
}