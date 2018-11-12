/*
OBJECTIVE

Registration Process:
There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/

// Math.random() returns a value between 0 and 1. Multiplying the returned value by 1000 will make this set of numbers range from 0 to 1000. Math.floor() will ensure only whole numbers from 0 to 999.
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 27;

console.log(raceNumber)
if ((runnerAge > 18) && (registeredEarly)) {
  raceNumber += 1000;
}

// Control flow to check the runner's age and registration time and indicate appropriate start time.
if((runnerAge > 18) && (registeredEarly)) {
  console.log(`Early adult registrants will run at 9:30 am. You race number is: ${raceNumber}`);
}
else if ((runnerAge > 18) && (!registeredEarly)) {
  console.log(`Late adult registrants will run at 11:00 am. You race number is ${raceNumber}`);
}
else if (runnerAge < 18) {
  console.log(`Youth registrants (under 18 years old) will run at 12:30 pm. Your race number is: ${raceNumber}`);
}
else {
  console.log('For those who are 18 years old. Please, visit the registration desk.');
}
