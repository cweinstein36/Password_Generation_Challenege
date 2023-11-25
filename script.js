
// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

var pswdLength = 8;
var pswdArray = [];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseLtrArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLtrArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var spCharArray = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ">", "<", "@", "#", "$", "%"];

var lengths = prompt("How many characters would you like the password to contain");
console.log(length)
if (!lengths || isNaN(lengths) == true ) {
  alert("please enter a numeric value");
  generatePassword()
}
else if (lengths < 8 || lengths >128) {
  alert("Password length must be between 8 and 128 characters!");
  generatePassword()
}
else {

var useSpecial = confirm("Do you want special characters?");

var useNumb = confirm( "Do you want numbers?");

var useLower = confirm( "Do you want lowercase letters?");

var useUpper = confirm("Do you waant uppercase letters?");



