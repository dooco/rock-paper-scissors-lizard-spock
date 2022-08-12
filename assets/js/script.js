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
 const choices = ["rock","paper","scissors","lizard","spock"];
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
 function checkWinner(computerSelection,humanSelection) {
    console.log(computerSelection);
    console.log(humanSelection);
 }
function updateScores(winingResult) {
    console.log(winingResult);
}