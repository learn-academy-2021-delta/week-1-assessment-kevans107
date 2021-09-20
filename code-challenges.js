// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"


var tempBelow = 35
var tempAbove = 350
var tempAt = 212
//Step 1: Adjust each var to make them a unique value to run through the conditional statement(ie. tempBelow, tempAbove, tempAt)

var currentTemp = 350
//Step 2: make a unique var for the current temp to be run through function

if (currentTemp === tempBelow){
    console.log("35 is below boiling point") 
} else if (currentTemp === tempAbove){
    console.log("350 is above boiling point")
} else if (currentTemp === tempAt)
    console.log("212 is at boiling point")
//Step 3: Create an if/else if statement for each of the temperatures so that once the currentTemp is run through tempBelow, tempAbove, and tempAt the correct string is console.log'ed
//Step 4: Check each temp variable to ensure the correct string populates at each temperature 

    

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

var combinedArrays = myNumbers1.concat(myNumbers2)
//Step 1: make a combined array using .concat() 
console.log(combinedArrays.length)
//Step 2: Console.log the combined array with the .length built in to get an output of 10



// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"



myString1.split("") 
// Step 1: I split the string so that each letter was a separate index
var myString3 = myString1.split("")
myString3.reverse()
//When I tried to reverse myString1.split("") I kept getting the TypeError that myString1.reverse is not a function so I made a new variable to reverse the string, I think this is because the split turned the letters into an array. Is there a better method?
myString3.join("")
// After I reversed the array I joined it again as a string

myString2.split("") 
// I split the myString2 so that each letter was a separate index
var myString4 = myString2.split("")
myString4.reverse()
//When I tried to reverse myString2.split("") I kept getting the TypeError that myString2.reverse is not a function so I made a new variable to reverse the string
myString4.join("")
// After I reversed the array I joined it again as a string

var newArray = [myString3.join(""), myString4.join("")]
console.log(newArray)
//I was unsure if the intention of this problem was to leave the variables as separate strings or make an array with the output




// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

var number1 = 42
var number2 = 27

if (number1 > number2){
    console.log(number1 - number2)
} else if (number2 > number1)
    console.log(number2 - number1)

// Created an if/else if statement that would determine if one number was greater than another. If the variable number1 is greater then console.log the value of number1 minus number2. Created the else if statement in case there are instances where number2 is the greater number then the function will still perform the operation of subtracting the greater number. I performed the main operation and then changed number2 variable to be the greater number to ensure that the function would subtract if number2 was the greater value


var number1 = 7
var number2 = 19

if (number1 > number2){
    console.log(number1 - number2)
} else if (number2 > number1)
    console.log(number2 - number1)
// Created an if/else statement that would determine if one number was greater than another. If the variable number1 is greater then console.log the value of number1 minus number2. Created the else if statement in case there are instances where number2 is the greater number, then the function will still perform the operation of subtracting the greater number. I performed the main operation and then changed number2 variable to be the greater number to ensure that the function would subtract correctly if number2 was the greater value


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

if (typeof numberRefactor1 === "string"){
    console.log("Your input is not a number")
} else if (typeof numberRefactor2 === "string"){
    console.log("Your input is not a number")
// Step 1: Set up an if/else if statement that will recognize a string for each variable using typeof
} else if (numberRefactor1 > numberRefactor2){
    console.log(numberRefactor1 - numberRefactor2)
} else if (numberRefactor2 > numberRefactor1)
    console.log(numberRefractor2 - numberRefractor1)
//Step 2: Adjust the code from problem 4 to reflect the new variables. My current console.log gives the output "Your input is not a number"

    
var numberRefactor1 = 27
var numberRefactor2 = 24

if (typeof numberRefactor1 === "string"){
    console.log("Your input is not a number")
} else if (typeof numberRefactor2 === "string"){
    console.log("Your input is not a number")
// Step 1: Set up an if/else if statement that will recognize a string each variable using typeof
} else if (numberRefactor1 > numberRefactor2){
    console.log(numberRefactor1 - numberRefactor2)
} else if (numberRefactor2 > numberRefactor1)
    console.log(numberRefactor2 - numberRefactor1)
//Step 2: Adjust the code from problem 4 to reflect the new variables. My current console.log gives the output 3