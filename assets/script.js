
// arrays of lowercase, uppercase, numeric, and special characters
var generateBtn = document.querySelector('#generate');
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","#","$","%","^","&","*","(",")"];
var passwordChar = [];

// displays random element

function getRandom(prand) {
  var prandIn = Math.floor(Math.random() * prand.length);
  var prandEl = prand[prandIn];
  return prandEl;
}

// function takes in password criteria, but first validates character length

function PasswordCriteria() {
  var length = parseInt(
    prompt("length of the password: 8 - 128 characters?")
    );

  if (length < 8) {
    alert("must be 8 - 128 characters... try again");
    return;
  }

  if (length > 128) {
    alert("must be 8 - 128 characters... try again");
    return;
  }

  if (isNaN(length) === true) {
    alert("enter a number... try again");
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

  if (includeLowercase === true) {
  passwordChar = passwordChar.concat(lowercase);
  }

  if (includeUppercase === true) {
  passwordChar = passwordChar.concat(uppercase);
  }

  if (includeNumeric === true) {
  passwordChar = passwordChar.concat(numeric);
  }

  if (includeSpecial === true) {
  passwordChar = passwordChar.concat(special);
  }

  var finalPW = ""
  return finalPW
}

// displays the password in the text area

function writePassword() {
  var generatedPassword = PasswordCriteria();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}
generateBtn.addEventListener("click", writePassword);