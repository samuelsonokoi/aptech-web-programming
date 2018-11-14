// Working with Javascript functions

do{
  var numOne = parseInt( prompt("Enter a number: ") );
} while(isNaN(numOne));

do{
  var numTwo = parseInt( prompt("Enter another number: ") );
} while(isNaN(numTwo));

do{
  var choice = parseInt( prompt("1 - Add, 2 - Sub, 3 - Mul, 4 - Div") );

  // Check that no number can be divisible by zero
  
} while(isNaN(choice));

switch (choice) {
  case 1:
    add();    
    break;
  case 2:
    subtract();
    break;
  case 3:
    multiply(numOne, numTwo);
    break;
  case 4:
    if (numOne !== 0 && numTwo !== 0) {
      divide(numOne, numTwo);
    } else {
      alert("Sorry! you cannot divide by 0");
    }
    break;
  default:
    alert("Sorry, you entered an invalid input.");
    break;
}

function add(){
  alert(numOne + " + " + numTwo + " = " + (numOne + numTwo));
}
function subtract(){
  alert(numOne + " - " + numTwo + " = " + (numOne - numTwo))
}
function multiply(a, b){
  alert(a + " * " + b + " = " + (a * b))
}
function divide(a, b){
  alert(a + " / " + b + " = " + (a / b))
}