/*
DESCRIPTION / OBJECTIVE

Rock paper scissors is a classic two player game.
Each player chooses either rock, paper, or scissors.
The items are compared, and whichever player chooses
the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user's choice.
Get the computer's choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/


// Function checks validity of user's choice.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  }
  else {
    console.log('Your choice is invalid. Please, choose: Rock, Paper or Scissors next time.');
  }
};

// Function randomly generates computer choices.
const getComputerChoice = () => {
  // Choices are generated with Math.random() function with values from 0 to 2.
  computerChoice = Math.floor(Math.random() * 3);

  switch(computerChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Function (with control flow) checks user and computer's choices to determine winner.
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }
  // Cheat Code
  if (userChoice === 'bomb') {
    return 'The user won!';
  }
  // Standard Choices
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    }
    else {
      return 'The user won!';
    }
  }
  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
     	return 'The computer won!';
    }
    else {
      return 'The user won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    }
    else {
     return 'The user won!';
    }
  }
};

// This function will generate the code to run the game
const playGame = () => {
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();

  console.log(`The user chose: ${userChoice}; The computer chose: ${computerChoice}`);

  // Passing arguments to determine victory
	console.log(determineWinner(userChoice, computerChoice));
};

// Invoke function to play the game
playGame();
