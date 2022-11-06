// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts to select password criteria
document.getElementById("generate").onclick = function() {

    window.confirm("Press 'Ok' to begin selecting your password criteria");
    var userInputMinChar = window.prompt ("Enter MINIMUM amount of characters (min of 8)")
    const userMinChar = userInputMinChar;
    if (userMinChar < 8 || userMinChar > 128 || isNaN(userInputMinChar) ) {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputMaxChar = window.prompt ("Enter MAXIMUM amount of characters (max of 128)")
    const userMaxChar = userInputMaxChar;
    if (userMaxChar > 128 || userMaxChar < 8 || isNaN(userInputMaxChar) ) {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputLowercase = window.prompt ("Type 'yes' if you would like to include LOWERCASE letters, type 'no' if you don't want to include them")
    const userLowercase = userInputLowercase.toLowerCase();
    if (userLowercase !== "no" && userLowercase !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userLowercase === "yes") {
        const lower = getRandomLower;
    }
    var userInputUppercase = window.prompt ("Type 'yes' if you would like to include UPPERCASE letters, type 'no' if you don't want to include them")
    const userUppercase = userInputUppercase.toLowerCase();;
    if (userUppercase !== "no" && userUppercase !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userUppercase === "yes") {
        const upper = getRandomUpper;
    }
    var userInputNumeric = window.prompt ("Type 'yes' if you would like to include NUMBERS, type 'no' if you don't want to include them")
    const userNumeric = userInputNumeric.toLowerCase();;
    if (userNumeric !== "no" && userNumeric !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userNumeric === "yes") {
        const number = getRandomNumber;
    }
    var userInputSpecialCharacters = window.prompt ("Type 'yes' if you would like to include SPECIAL CHARACTERS, type 'no' if you don't want to include them")
    const userSpecialCharacters = userInputSpecialCharacters.toLowerCase();;
    if (userSpecialCharacters !== "no" && userSpecialCharacters !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userSpecialCharacters === "yes") {
        const symbol = getRandomSymbol;
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
// Functions responsible to return a random value that will create password
    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
    }
    function getRandomSymbol() {
        const symbols = '~!@#$%^&*()_+{}":?><;.,';
        return symbols[Math.floor(Math.random() * symbols.length)];
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
