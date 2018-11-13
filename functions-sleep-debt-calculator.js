/*
DESCRIPTION / OBJECTIVE

We'll calculate if you're getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// Days slept in the past week
const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 5.5;
      break;
    case 'tuesday':
      return 5.5;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 5.5;
      break;
    case 'friday':
      return 5.5;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 12;
      break;
    default:
      return 'error!'
  }
};
// Invoking Helper function in getActualSleepHours()
const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};
// Checking validity between hours slept and ideal hours slept. Returning values.
const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours(7);

  if (actualSleepHours === idealSleepHours) {
    return `You got the perfect amount of sleep! Total hours slept last week: ${actualSleepHours} hours.`
  }
  else if (actualSleepHours > idealSleepHours) {
    return `You've got ${actualSleepHours - idealSleepHours} hour(s) of sleep more than you should have last week.`
  }
  else if (actualSleepHours < idealSleepHours) {
    return `You should get some rest. You sleep ${idealSleepHours - actualSleepHours} hour(s) less than you should have last week. Total hours slept last week: ${actualSleepHours} hours.`
  }
  else {
    return `Error! Something went wrong. Check your code.`
  }
};
// Invoking function and starting the program
console.log(calculateSleepDebt());
