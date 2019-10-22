/*
DESCRIPTION / OBJECTIVE

A person's number of imaginary friends are always 33% of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends
a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result before returning it.
*/

const numImaginaryFriends = (friends) => {
	totalImaginaryFriends = Math.round(friends * 0.33);
  return totalImaginaryFriends
};

console.log(numImaginaryFriends(18)) // 6
