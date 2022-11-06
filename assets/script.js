// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

// Prompts to select password criteria
    window.confirm("Press 'Ok' to begin selecting your password criteria");
    var userInputLength = window.prompt ("Enter password length (minimum 8, maximum 128)")
    const userLength = userInputLength;
    if (userLength < 8 || userLength > 128 || isNaN(userInputLength) ) {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    var userInputLowercase = window.prompt ("Type 'yes' if you would like to include LOWERCASE letters, type 'no' if you don't want to include them")
    const userLowercase = userInputLowercase.toLowerCase();
    if (userLowercase !== "no" && userLowercase !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userLowercase === "yes"){
        lower = getRandomLower;
    }
      var userInputUppercase = window.prompt ("Type 'yes' if you would like to include UPPERCASE letters, type 'no' if you don't want to include them")
    const userUppercase = userInputUppercase.toLowerCase();;
    if (userUppercase !== "no" && userUppercase !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userUppercase === "yes"){
        upper = getRandomUpper;
    }
    var userInputNumeric = window.prompt ("Type 'yes' if you would like to include NUMBERS, type 'no' if you don't want to include them")
    const userNumeric = userInputNumeric.toLowerCase();;
    if (userNumeric !== "no" && userNumeric !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userNumeric === "yes"){
        number = getRandomNumber
    }
    var userInputSpecialCharacters = window.prompt ("Type 'yes' if you would like to include SPECIAL CHARACTERS, type 'no' if you don't want to include them")
    const userSpecialCharacters = userInputSpecialCharacters.toLowerCase();;
    if (userSpecialCharacters !== "no" && userSpecialCharacters !== "yes") {
        window.confirm("Invalid entry, please try again.")
        return;
    }
    if (userSpecialCharacters === "yes"){
        symbol = getRandomSymbol
    }
    if (userLowercase === "no" && userUppercase === "no" && userNumeric === "no" && userSpecialCharacters === "no") {
        window.confirm("You must say 'yes' to at least one character type. Please make your selections again.")
        return;
    } else {
        window.confirm ( "Please confirm your selection:" +
            "\n\nTotal characters: " + userLength +
            "\nLowercase: " + userLowercase +
            "\nUppercase: " + userUppercase +
            "\nNumbers: " + userNumeric +
            "\nSpecial characters: " + userSpecialCharacters
        )
    }

    const length = userLength;

    for (let i = 0; i < length; i++) {
        console.log(getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol())
    }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
