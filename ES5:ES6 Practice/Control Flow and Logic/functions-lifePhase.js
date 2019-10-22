/*
DESCRIPTION / OBJECTIVE

Write a function, lifePhase(), that takes in a person's age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
*/

// Validation of age (Control Flow)
const lifePhase = age => {
  if (age < 0 || age > 140) {
    return 'This is not a valid age.'
  }
  else if (age < 4) {
    return 'Baby.'
  }
  else if (age < 12) {
    return 'Child.'
  }
  else if (age < 19) {
    return 'Teen.'
  }
  else if (age < 64) {
    return 'Adult.'
  }
  else if (age < 140) {
    return 'Senior citizen.'
  }
  else {
    return 'An error occurred!'
  }
};

	console.log(lifePhase(5)) 	// Child
	console.log(lifePhase(16)) 	// Teen
	console.log(lifePhase(0)) 	// Baby
	console.log(lifePhase(3)) 	// Baby
	console.log(lifePhase(-1)) 	// This is not a valid age
	console.log(lifePhase(141)) // This is not a valid age
