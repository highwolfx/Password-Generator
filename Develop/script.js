// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = true;
var upperCase = true;
var symbols = true;
var numbers = true;
var passLength = document.querySelector(".valueSpan");

// Define array variables of each condition
lowerCaseArray = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
lowerCaseArrayNull = [];
upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
upperCaseArrayNull = [];
symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
symbolArrayNull = [];
numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
numberArrayNull = [];


// Determine if each condition is checked or not.
if (lowerCase === true) {
  finalLowerCaseArray = lowerCaseArray;
} else if (lowerCase === false) {
  finalLowerCaseArray = lowerCaseArrayNull;
};

if (upperCase === true){
  finalUpperCaseArray = upperCaseArray;
} else if (upperCase === false){
  finalUpperCaseArray = upperCaseArrayNull;
};

if (symbols === true){
  finalSymbolArray = symbolArray;
} else if (symbols === false){
  finalSymbolArray = symbolArrayNull;
};

if (numbers = true){
  finalNumberArray = numberArray;
} else if (numbers = false){
  finalNumberArray = numberArrayNull;
};

$(document).ready(function() {

  const $valueSpan = $('.valueSpan');
  const $value = $('#slider11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});

finalArray = finalLowerCaseArray.concat(finalUpperCaseArray,finalSymbolArray,finalNumberArray);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var slider = new slider("#slider11");
slider.on("slide", function(slideEvt) {
 console.log(slider.getValue() );
});
console.log(finalArray);
console.log(passLength);