var first, second, result, choice;

function calculate(){
  first = document.getElementById("first").value;
  second = document.getElementById("second").value;
  // TODO get the value of the select and assign to choice
  
  // TODO using a switch you check if the user wants to add, multiply, subtract or divide. based on the choice value, you should be able to call the appropriate functions.

  // TODO check if the number is to be divided by zero and tell the user that you can't divide a number by zero

  // TODO make sure you can't subtract a bigger number from a smaller number

  subtract(first, second);

}

function add(f, s) {

  result = parseInt(f) + parseInt(s);

  document.getElementById("result").textContent = result;
  
}

function subtract(f,s) {
  result = parseInt(f) - parseInt(s);

  document.getElementById("result").textContent = result;
}

function divide(f, s) {
  result = parseInt(f) / parseInt(s);

  document.getElementById("result").textContent = result;
}

function multiply(f, s) {
  result = parseInt(f) * parseInt(s);

  document.getElementById("result").textContent = result;
}