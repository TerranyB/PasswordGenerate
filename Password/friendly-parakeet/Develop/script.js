// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length) {
  var password = generatePassword('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var password = '';
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@$%^&*()?"


  const array = new Uint16Array(length)
  window.crypto.getRandomValues(array)
  for (i-0; i<length; i++) {
    password += chars[array[i] % chars.length];
  }
  console.log(password)
  return password


}
writePassword(7)
writePassword(10)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
