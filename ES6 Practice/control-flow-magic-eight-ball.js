/*
DESCRIPTION / OBJECTIVE
A hardcoded question will be displayed, then our program will output a random fortune.
*/

// Dinamic user assignment variable
let userName = 'Marlon';
// Question asked
let userQuestion = 'Will I soon get my first tech job?';
// Math.random() Returns a value between 0 and 1.
// Multiplying the returned value by 8 will make
// this set of numbers range from 0 to 8.
// To ensure only whole numbers from 0 to 7
// we can round down using Math.floor()
let randomNumber = Math.floor(Math.random() * 8);
// Will hold a value depending on the value of randomNumber
let eightBall = '';

// Ternary operator to check user's authenticity
userName ? console.log(`Hello, ${userName}!`) :
console.log(`Hello!`);

// Display user's question
console.log(`You asked: ${userQuestion}, right?`);

// control flow that takes in a random number and then will assign the Eight Ball a value depending on the value of the randomNumber
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain.';
    break;
  case 1:
    eightBall = 'It is decidedly so.';
    break;
	case 2:
    eightBall = 'Reply hazy try again.';
    break;
	case 3:
		eightBall = 'Cannot predict now.';
    break;
	case 4:
    eightBall = 'Do not count on it.';
		break;
	case 5:
    eightBall = 'My sources say no';
    break;
	case 6:
    eightBall = 'Outlook not so good';
    break;
	case 7:
    eightBall = 'Signs point to yes.';
    break;
  default:
    eightBall = 'I\'m not feeling well today!';
    break;
}

// Prints out the value of the magic eight ball variable
console.log(`Well, I say: ${eightBall}`);
