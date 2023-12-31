// Assignment code here
var pwdLength = parseInt(prompt("Choose a length between 8-128 characters:")); //Charlie Puente TA helped with this variable

function createBest(length) {
  if (length >= 8 && length <= 128) { //Charlie Puente TA helped with this if statement
  var zero = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_+-=';
  var msg = '';
  for (i = 0; i < length; i++) {  // This for loop and the randoChars declaration was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me how to write it
    var randoChars = Math.floor(Math.random() * zero.length);
    msg += zero.charAt(randoChars);
  }
  return msg;
}
}

var finalBest = createBest(pwdLength);

function createBetter(length) {
  if (length >= 8 && length <= 128) {
  var one = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var msg = '';
  for (i = 0; i < length; i++) {  // This for loop and the randoChars declaration was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me how to write it
    var randoChars = Math.floor(Math.random() * one.length);  //Math used to give me random characters
    msg += one.charAt(randoChars);  // Using my alphabet I declared as one, characters are selected at random in conjuction with my randoChars math.
  }
  return msg;  //spits out the character it selected
}
}

var finalBetter = createBetter(pwdLength);

function createGood(length) {
  if (length >= 8 && length <= 128) {
  var two = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var msg = '';
  for (i = 0; i < length; i++) {  // This for loop and the randoChars declaration was not provided directly for this purpose, but Tutor Andrew Hardemon helped with showing me how to write it
    var randoChars = Math.floor(Math.random() * two.length);
    msg += two.charAt(randoChars);
  }
  return msg;
}
}

// I could use a confirm prompt here according to Charlie Puente TA.  It would accomplish the bare minimum to acheive grading standards but,
// personally, I want to wait until I have a better understanding of forms, APIs and DOM manipulation, in order to make it look pretty and
// not rely on browser prompts that aren't very intuitive to the user.

var finalGood = createGood(pwdLength);


console.log("Stong: " + finalBest);
console.log("Middle: " + finalBetter);
console.log("Weak: " + finalGood);

document.getElementById('password').innerHTML = finalBest  //Got the password to display in the "textarea", console log in browser shows other password types

// I used stackoverflow for pointers, screenshots from in class, plus notes I took from Jon Duckett's "Javascript and jQuery" to accomplish this code.









































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
