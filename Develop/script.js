// Assignment Code
var generateBtn = document.querySelector("#generate");


// Defined variables, such as password length, and status of checkboxes to include in password
var upperCheck = document.getElementById("upperCheck");
var lowerCheck = document.getElementById("lowerCheck");
var numberCheck = document.getElementById("numberCheck");
var symbolCheck = document.getElementById("symbolCheck");
var genPass = ""


// Shows the password length on the slider
$(document).ready(function() {

  const $valueSpan = $('.valueSpan');
  const $value = $('#slider11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});




// Define array variables of each condition
lowerCaseArray = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
lowerCaseArrayNull = [];
upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
upperCaseArrayNull = [];
symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
symbolArrayNull = [];
numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
numberArrayNull = [];


// Determine if each condition is checked or not, then generate password using checked conditions
function generatePassword() {
  var passLength = document.getElementById("slider11").value;

  if ((upperCheck.checked == false) && (lowerCheck.checked == false) && (symbolCheck.checked == false) && (numberCheck.checked == false)) {
    alert("Please check at least one type of character for the password to include!")
  } else {
    if (upperCheck.checked == true){
      finalUpperCaseArray = upperCaseArray;
    } else if (upperCheck.checked == false){
      finalUpperCaseArray = upperCaseArrayNull;
    };

    if (lowerCheck.checked == true) {
      finalLowerCaseArray = lowerCaseArray;
    } else if (lowerCheck.checked == false) {
      finalLowerCaseArray = lowerCaseArrayNull;
    };

    if (symbolCheck.checked == true){
      finalSymbolArray = symbolArray;
    } else if (symbolCheck.checked == false){
      finalSymbolArray = symbolArrayNull;
    };

    if (numberCheck.checked == true){
      finalNumberArray = numberArray;
    } else if (numberCheck.checked == false){
      finalNumberArray = numberArrayNull;
    };
  };

  finalArray = finalLowerCaseArray.concat(finalUpperCaseArray,  finalSymbolArray,finalNumberArray);

  for (var i=0; i < passLength; i++) {
    genPass = genPass+finalArray[Math.floor(Math.random() * finalArray.length)];
  }
};

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = "";
  passwordText.value = genPass;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);