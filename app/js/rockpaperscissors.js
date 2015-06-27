////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /*
    var playerMove
    return move ? move : getInput();
    */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /*
    var computerMove;
    return move ? move : randomPlay();
    */
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /*

if (playerMove === computerMove) {
    return ('Tie');
    }
    else if
        ((playerMove === 'rock') && (computerMove =='scissors')) {
    winner = ('playerWins');
    console.log('Player Wins');
    }
    else if
        ((playerMove ==='paper') && (computerMove =='rock')) {
    winner = ('playerWins');
    console.log('Player Wins');
        }
    else if
        ((playerMove ==='scissors') && (computerMove =='paper')) {
    winner = ('playerWins');
    console.log('Player Wins');
    }
    else {
    winner = ('computerWins');
    console.log('Computer Wins');
    }
     */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /*
    var winner = getWinner(getPlayerMove(),getComputerMove());
    while(playerWins < 5 && computerWins < 5) {
    getWinner(getPlayerMove(),getComputerMove());
    if (winner === 'player') {playerWins++}
    else if(winner === 'computer') {computerWins++}
    else {getWinner(getPlayerMove(),getComputerMove());}
    }
    */
    return [playerWins, computerWins];
    }

