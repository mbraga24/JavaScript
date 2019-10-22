/*
DESCRIPTION / OBJECTIVE

Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
*/

const howOld = (age, year) => {
	const theCurrentYear = 2018;
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference

  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born.`
  }
  else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`
  }
  else if (newAge < age) {
  	return `You were ${newAge} in the year ${year}`
	}
  else {
    return 'An error occurred!'
  }
}

console.log(howOld(18, 1999)); //The year 1999 was 1 years before you were born.
console.log(howOld(18, 2021)); //You will be 21 in the year 2021
console.log(howOld(18, 2008)); //You were 8 in the year 2008
