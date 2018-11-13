/*
DESCRIPTION / OBJECTIVE

The most common minimum age to vote is 18. Write a function canIVote()
that takes in a number, representing the person's age, and returns
the boolean true if they are 18 years old or older, and the boolean
false if they are not.
*/

const canIVote = (age) => {
	let authorize = false;

  if (age === 18 || age > 18) {
    return authorize = true;
  }
  else {
  	return authorize = false;
  }
};


console.log(canIVote(19)) // true
console.log(canIVote(17)) // false
console.log(canIVote(18)) // true
console.log(canIVote(65)) // true
console.log(canIVote(11)) // false
