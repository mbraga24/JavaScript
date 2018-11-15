/*
DESCRIPTION / OBJECTIVE

Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return 'You have entered an invalid grade.' if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

const finalGrade = (scoreOne, scoreTwo, scoreThree) => {
  let average = 0;

  // Checking all three variables validation
  if (scoreOne < 0 || scoreOne > 100 || scoreTwo < 0 || scoreTwo > 100 || scoreThree < 0 || scoreThree > 100) {
    return 'You have entered an invalid grade.'
  }

  // Calculating the average
  totalScore = scoreOne + scoreTwo + scoreThree;
  // Math.floor() eliminating decimal values
	average = Math.floor(totalScore / 3);

  if (average >= 0 && average <= 59) {
    return 'Grade: F - Average: ' + average
  }
  else if (average <= 69) {
    return 'Grade: D - Average: ' + average
  }
  else if (average <= 79) {
    return 'Grade: C - Average: ' + average
  }
  else if (average <= 89) {
    return 'Grade: B - Average: ' + average
  }
  else {
    return 'Grade: A - Average: ' + average
  }
};

console.log(finalGrade(100, 80, 90)) // Average: 90 - Grade: A
console.log(finalGrade(100, 50, 80)) // Average: 76 - Grade: C
