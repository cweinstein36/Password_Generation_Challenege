
// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function getPrompts() {
  pswdArray = [];

  pswdLength = parseInt (prompt("How many characters do you want the password to be?"));

  if(isNaN(pswdLength) || pswdLength <8 || pswdLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    pswdArray = pswdArray.concat(lowerCaseLtrArray);
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    pswdArray = pswdArray.concat(upperCaseLtrArray);
  }

  if (confirm("Do you want special characters in your password?")) {
    pswdArray = pswdArray.concat(spCharArray);
  }

  if (confirm("Do you want numbers in your password?")) {
    pswdArray = pswdArray.concat(numberArray);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
