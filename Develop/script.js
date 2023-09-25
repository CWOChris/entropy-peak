// Assignment code here

function createBest(length) {
  var zero = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_+-=';
  var msg = '';
  for (i = 0; i < length; i++) {  // This for loop was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me how to write it
    var randoChars = Math.floor(Math.random() * zero.length);
    msg += zero.charAt(randoChars);
  }
  return msg;
}

var pwdLength = 12; //Need to get to repsond to user requested length between 8-128

var finalBest = createBest(pwdLength);

function createBetter(length) {
  var zero = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var msg = '';
  for (i = 0; i < length; i++) {  // This for loop was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me how to write it
    var randoChars = Math.floor(Math.random() * zero.length);
    msg += zero.charAt(randoChars);
  }
  return msg;
}














console.log("Stong: " + finalBest);
console.log("Stong: " + finalBetter);
console.log("Stong: " + finalGood);











































// // Assignment code here
// var lowercase = "abcdefghijklmnopqrstuvwxyz";
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var arabic = "0123456789";
// var specChar = "!@#$%^&*()_+-=";
// // Declare all the characters specified in the acceptance criteria
// var zero = lowercase + uppercase + arabic + specChar;
// var one = lowercase + uppercase + arabic;
// var two = lowercase + uppercase;
// // Declare the three combinations of characters I'll use based on user choices
// var msg = '';
// // Declare that msg will be used later to edit DOM to display password generated
// var lowSide = 8;
// var highSide = 128;
// // Declare the minimum and maximum lengths for the generated password

// // This was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me these equations
// var randomZero = zero[Math.floor(Math.random() * zero.length)];
// var randomOne = one[Math.floor(Math.random() * one.length)];
// var randomTwo = two[Math.floor(Math.random() * two.length)];
// // Declare equations to use in for loop for picking characters at random
// var userLength = Math.floor(Math.random() * (highSide - lowSide +1)) + lowSide;

// function randomCharPicker(characters) {{
//   msg += characters.charAt(randomZero);
// }
// return msg;
// }


// console.log(randomCharPicker)


// console.log("this is what msg is:" + msg)



// console.log("this is what randomZero is:" + randomZero);
// console.log("this is what randomOne is:" + randomOne);
// console.log("this is what randomTwo is:" + randomTwo);
// console.log("this is what finalPassword is:" + finalPassword);
// console.log("this is what userLength is:" + userLength);  // This definitely spits out a random number between 8 and 128, not useful yet

// // AS AN employee with access to sensitive data
// // I WANT to randomly generate a password that meets certain criteria
// // SO THAT I can create a strong password that provides greater security
// // ```

// // ## Acceptance Criteria

// // ```
// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
// // WHEN asked for character types to include in the password
// // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page















// // // FROM STARTER CODE NEXT 1 LINE = Get references to the #generate element
// // var generateBtn = document.querySelector("#generate");

// // // FROM STARTER CODE NEXT 7 LINES = Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // // FROM STARTER CODE NEXT 1 LINE= Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
