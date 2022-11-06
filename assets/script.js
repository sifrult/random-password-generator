// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "01234567890";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Prompts to select password criteria
document.getElementById("generate").onclick = function() {
    window.confirm("Press 'Ok' to begin selecting your password criteria");
    var userInputMinChar = window.prompt ("Enter MINIMUM amount of characters (min of 8)")
    var userMinChar = userInputMinChar;
    if (userMinChar < 8 || userMinChar > 128 || isNaN(userInputMinChar) ) {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputMaxChar = window.prompt ("Enter MAXIMUM amount of characters (max of 128)")
    var userMaxChar = userInputMaxChar;
    if (userMaxChar > 128 || userMaxChar < userMinChar || isNaN(userInputMaxChar) ) {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputLowercase = window.prompt ("Type 'yes' if you would like to include LOWERCASE letters, type 'no' if you don't want to include them")
    var userLowercase = userInputLowercase;
    if (userLowercase !== "no" && userLowercase !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputUppercase = window.prompt ("Type 'yes' if you would like to include UPPERCASE letters, type 'no' if you don't want to include them")
    var userUppercase = userInputUppercase;
    if (userUppercase !== "no" && userUppercase !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputNumeric = window.prompt ("Type 'yes' if you would like to include NUMBERS, type 'no' if you don't want to include them")
    var userNumeric = userInputNumeric;
    if (userNumeric !== "no" && userNumeric !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputSpecialCharacters = window.prompt ("Type 'yes' if you would like to include SPECIAL CHARACTERS, type 'no' if you don't want to include them")
    var userSpecialCharacters = userInputSpecialCharacters;
    if (userSpecialCharacters !== "no" && userSpecialCharacters !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userLowercase === "no" && userUppercase === "no" && userNumeric === "no" && userSpecialCharacters === "no") {
        window.confirm("You must say 'yes' to at least one character type. Please make your selections again.")
        return;
    } else {
        window.confirm ( "Please confirm your selection:" +
            "\n\nMin character: " + userMinChar +
            "\nMax characters: " + userMaxChar +
            "\nLowercase: " + userLowercase +
            "\nUppercase: " + userUppercase +
            "\nNumbers: " + userNumeric +
            "\nSpecial characters: " + userSpecialCharacters
        )
    }
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
