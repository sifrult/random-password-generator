// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
