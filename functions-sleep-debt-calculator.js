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
    case 'tuesday':
      return 5.5;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 5.5;
    case 'friday':
      return 5.5;
    case 'saturday':
      return 7;
    case 'sunday':
      return 12;
  }
};

const getActualSleepHours = () =>
// Invoking Helper function in getActualSleepHours(), adding, and implicitly returning total
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

// Checking validity between hours slept and ideal hours slept. Returning values.
const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours(7);

  let calculatedHours = idealSleepHours - actualSleepHours

  if (actualSleepHours === idealSleepHours) {
    return `You got the perfect amount of sleep! Total hours slept last week: ${actualSleepHours} hours.`
  }
  else if (actualSleepHours > idealSleepHours) {
    return `You got more sleep than you needed. This is how much you're ove your ideal plan: ${-calculatedHours} hours more slept. Total hours slept last week: ${actualSleepHours} hours.`
  }
  else {
    return `You should get some rest. You owe to yourself ${calculatedHours} hours of sleep. Total hours slept last week: ${actualSleepHours} hours.`
  }
};

// Invoking function and starting the program
console.log(calculateSleepDebt());
