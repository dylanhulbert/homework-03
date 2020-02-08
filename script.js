
// arrays of lowercase, uppercase, numeric, and special characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9","0"]
var special = ["!","@","#","$","%","^","&","*","(",")"]


// this function pulls together the selected password critera
function PasswordCriteria() {
  var length = parseInt(prompt("length of the password: 8 - 128 characters?"));

  if (length < 8) {
    alert("must be 8 - 128 characters... try again");
    return;
  }

  if (length > 128) {
    alert("must be 8 - 128 characters... try again");
    return;
  }

  var includeLowercase = confirm("lowercase?");
  var includeUppercase = confirm("uppercase?");
  var includeNumeric = confirm("numeric?");
  var includeSpecial = confirm("special characters?");

  if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
    alert("you have to pick something... try again");
    return;
  }

  var selectedCriteria = (length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  return selectedCriteria;





  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
