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

var uperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+"]
var numeric = [1,2,3,4,5,6,7,8,9]
var password = ""

function Passwordmain(){
var length = prompt(" How many char you like?")
if (length <8 || length > 128)
{ alert(" must be between 8-128")}
else {
  var upperCase = confirm("Would you like to use uppercase letters?")
  var lowerCase = confirm("Would you like to use lowercase letters?")
  var numeric = confirm("would you like to use numbers?")
  var specialChar = confirm("would you like to use special characters?")
}
for (let i = 0; i < length; i++);
{
  if (uperCase === true){ 
    password = password + toUpperCase( uperCase[Math.floor(Math.random()*uperCase.length)]
    )}
  if (lowerCase === true){
    password = password + lowerCase[Math.floor(Math.random()*lowerCase.length)]
    }
    if (numeric === true){
      password = password + numeric[Math.floor(Math.random()*numeric.length)]
      }
    if (specialChar === true){
        password = password + specialChar[Math.floor(Math.random()*specialChar.length)]
        }  
}
}
function randomChar(arr){
  var index = Math.floor(Math.random() * arr.length);
var element = arr[index]
return element 
}
function generatePassword(){
  var option = Passwordmain()
  var result = []
  var possibleChar = []
  var finalchar = []
  console.log(possibleChar,finalchar,option, "heloo")
  if (option.uperCase){
    possibleChar = possibleChar.concat(uperCase)
    finalchar.push(randomChar(uperCase))
    console.log(possibleChar,finalchar,option, "hello")
  }
} 


 




