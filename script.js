// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const generatePassword = () => {
  
const uperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
const specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+"];
const numeric = [1,2,3,4,5,6,7,8,9];
const options = [];
let pw = "";

const pwCount = parseInt(prompt("how many charractor would you like?"));

if (!pwCount || pwCount < 8 || pwCount > 128 ){
  alert ("does not meet requirement ")
 generatePassword ();}
 
 const userLower = confirm("do you want lower case?")
 if (userLower) options.push(lowerCase);
 const userUpper = confirm("do you want uper case?")
 if (userUpper) options.push(uperCase);
 const userSpecialChar = confirm("do you want special Character case?")
 if (userSpecialChar) options.push(specialChar);
 const userNumeric = confirm("do you want number case?")
 if (userNumeric) options.push(numeric);

 if (options.length === 0){
   alert ("must chose at least 1 case!");
   generatePassword();
 }
if (options.length === 1){
  const option = options[0];
  for (let i = 0; i < pwCount; i++) {
    const randIndex = Math.floor(Math.random() * option.length);
    pw += option[randIndex];
  }
  return pw;
}
while (pw.length !== pwCount){
  for (let i = 0; i < options.length; i++) {
    const currentOption = options[i];
    const randIndex = Math.floor(Math.random()* currentOption.length);
    pw += currentOption[randIndex];
  if (pw.length === pwCount) 
    return pw;
  }
}
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#count").textContent= password.length;

}
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 




