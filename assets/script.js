// arrays of lowercase, uppercase, numeric, and special characters
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
var passwordChar = [];
console.log(passwordChar)

// getPasswordOptions prompts for password rules
function getPasswordOptions() {
  var length = parseInt(prompt("Enter a number between 8 and 128"));

  if (isNaN(length) === true) {
    alert("Has to be an actual number!  Try again.");
    return;
  }

  if (length < 8 && length > 128) {
    alert("Between 8 and 128!  Try again.");
    return;
  }

  var includesLC = confirm("Include Lower Case?");
  console.log(includesLC)
  var includesUC = confirm("Include Upper Case?");
  var includesNC = confirm("Include Numbers?");
  var includesSC = confirm("Include Special Characters?");

  if (includesLC === false && includesUC === false && includesNC === false && includesSC === false) {
    alert("You have to choose something!  Try again.");
    return;
  }

  // passwordEL packages up the complete ruleset
  var passwordEl = {
    length: length,
    includesLC: includesLC,
    includesUC: includesUC,
    includesNC: includesNC,
    includesSC: includesSC
  };
  return passwordEl;
}

// creates a function (randomPW) from a random array based on the selected length
function randomPW(arr) {
  var randomPW = Math.floor(Math.random() * arr.length);
  var randomPWthePW = arr[randomPW];
  return randomPWthePW;
}

// function generates password with user input and using randomPW
function generatePassword() {
  var options = getPasswordOptions();
  var thePW = [];
  console.log(thePW)
  var anyChar = [];
  var theChar = [];

  if (options.includesLC) {
    anyChar = anyChar.concat(lowerCaseChar);
    theChar.push(randomPW(lowerCaseChar));
  }

  if (options.includesUC) {
    anyChar = anyChar.concat(upperCaseChar);
    theChar.push(randomPW(upperCaseChar));
  }

  if (options.includesNC) {
    anyChar = anyChar.concat(numericChar);
    theChar.push(randomPW(numericChar));
  }
  
  if (options.includesSC) {
    anyChar = anyChar.concat(specialChar);
    theChar.push(randomPW(specialChar));
  }

  for (var i = 0; i < options.length; i++) {
    var allChar = randomPW(anyChar);
    thePW.push(allChar);
  }
  return thePW.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);