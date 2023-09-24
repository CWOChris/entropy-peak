// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
var arabic = "0123456789";
var specChar = "!@#$%^&*()_+-=";
// Declare all the characters specified in the acceptance criteria
var zero = lowercase + uppercase + arabic + specChar;
var one = lowercase + uppercase + arabic;
var two = lowercase + uppercase;
// Declare the three combinations of characters I'll use based on user choices
var msg = '';
// Declare that msg will be used later to edit DOM to display password generated

// This was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me these equations
var randomZero = zero[Math.floor(Math.random() * zero.length)];
var randomOne = one[Math.floor(Math.random() * one.length)];
var randomTwo = two[Math.floor(Math.random() * two.length)];










console.log(randomZero);
console.log(randomOne);
console.log(randomTwo);



// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page















// // FROM STARTER CODE NEXT 1 LINE = Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // FROM STARTER CODE NEXT 7 LINES = Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // FROM STARTER CODE NEXT 1 LINE= Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
