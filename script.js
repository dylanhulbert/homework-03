
// arrays of lowercase, uppercase, numeric, and special characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9","0"]
var special = ["!","@","#","$","%","^","&","*","(",")"]

// funtion takes in password criteria
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

  var includeLowercase = confirm("lowercase?");
  var includeUppercase = confirm("uppercase?");
  var includeNumeric = confirm("numeric?");
  var includeSpecial = confirm("special characters?");

  if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
    alert("you have to pick something... try again");
    return;
  }
  
  var passwordSelection = {length: length, includeLowercase: includeLowercase, includeUppercase: includeUppercase, includeNumeric: includeNumeric, includeSpecial: includeSpecial};

  return passwordSelection
}

// console.log(passwordSelection)

function generatePassword() {
  var passwordInputs = PasswordCriteria();
}

// passwordInputs

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
