/*
  DESCRIPTION / OBJECTIVE

  Write a function, sillySentence(), that has 3 string parameters and
  returns the following silly sentence with the blanks filled in by
  the arguments passed into the function:
  "I am so 1.________ because I 2.________ coding! Time to write some more awesome 3._________ !"
  1. adjective
  2. verb
  3. noun
*/

const sillySentence = (adjective, verb, noun) => {
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`

};

console.log(sillySentence('excited', 'love', 'functions'))
