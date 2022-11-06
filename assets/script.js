// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "01234567890";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Prompts to select password criteria
document.getElementById("generate").onclick = function() {
    window.confirm("Press 'Ok' to begin selecting your password criteria");

    function minChar () {
        var userInputMinChar = window.prompt ("Enter MINIMUM amount of characters (min of 8)")
        const userMinChar = userInputMinChar;
        if (userMinChar < 8 || userMinChar > 128 || isNaN(userInputMinChar) ) {
            minChar()
        }
    }
    minChar();

    function maxChar () {
        var userInputMaxChar = window.prompt ("Enter MAXIMUM amount of characters (max of 128)")
        const userMaxChar = userInputMaxChar;
        if (userMaxChar > 128 || userMaxChar < 8 || isNaN(userInputMaxChar) ) {
            maxChar()
        }
    }
    maxChar();

    function lowerCase () {
        var userInputLowercase = window.prompt ("Type 'yes' if you would like to include LOWERCASE letters, type 'no' if you don't want to include them")
        const userLowercase = userInputLowercase;
        if (userLowercase !== "no" && userLowercase !== "yes") {
            lowerCase()
        }
    }
    lowerCase();

    function upperCase () {
        var userInputUppercase = window.prompt ("Type 'yes' if you would like to include UPPERCASE letters, type 'no' if you don't want to include them")
        const userUppercase = userInputUppercase;
        if (userUppercase !== "no" && userUppercase !== "yes") {
            upperCase()
        }
    }
    upperCase();

    function numbers () {
        var userInputNumeric = window.prompt ("Type 'yes' if you would like to include NUMBERS, type 'no' if you don't want to include them")
        const userNumeric = userInputNumeric;
        if (userNumeric !== "no" && userNumeric !== "yes") {
            numbers()
        }
    }
    numbers();

    function characters () {
        var userInputSpecialCharacters = window.prompt ("Type 'yes' if you would like to include SPECIAL CHARACTERS, type 'no' if you don't want to include them")
        const userSpecialCharacters = userInputSpecialCharacters;
        if (userSpecialCharacters !== "no" && userSpecialCharacters !== "yes") {
            characters()
        }
    }
    characters();


 }


// Generate password
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
