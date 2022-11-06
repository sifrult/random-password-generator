// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generate the password

const criteria = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };

function generatePassword() {
    var passwordCharSet = "";

    var length = window.prompt("Enter password length (minimum 8, maximum 128)");
        if (length < 8 || length > 128 || isNaN(length) ) {
            window.confirm("Invalid entry, please try again.")
            return;
        }
    var lowercase = window.confirm("Would you like to use LOWERCASE letters?");
        if (lowercase) {
            passwordCharSet += criteria.lowercase;
        };
    var uppercase = window.confirm("Would you like to use UPPERCASE letters?");
        if (uppercase) {
            passwordCharSet += criteria.uppercase;
        };
    var symbols = window.confirm("Would you like to use SYMBOLS?");
        if (symbols) {
         passwordCharSet += criteria.symbol;
        };

    var numbers = window.confirm("Would you like to use NUMBERS?");
        if (numbers) {
            passwordCharSet += criteria.number;
        };
    var password = "";
        for (let i = 0; i < length; i++) {
            password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
        }

    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
