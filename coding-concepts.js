// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: My initial answer was wrong because I was thinking of the index value rather than the true length of the string which is 10.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: My initial answer was correct because the console.log was looking for the third item in the string, which would be the second l since H is at the 0 index


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: My initial answer was correct because the index is looking for the 1st index which is after the 0 index of Javascript since indexing starts with the first value at zero


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: All letters in the array will return upper case
// b) Verify and explain: My initial answer was incorrect. The console.log returned an error because .toUpperCase is specific to strings and does not work for arrays.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: The numeric length of the array.
// b) Verify and explain: The console.log returned number. This one stumps me, especially since each value within the array is a string, I'm not sure why typeof would return number. Is it because the console.log first runs the dataTypes.length and then typeof reads the numeric value of the full length of the array as a number? 
