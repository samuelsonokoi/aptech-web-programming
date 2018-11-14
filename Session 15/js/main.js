var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var displayResult = document.getElementById("displayResult");

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var age = document.getElementById("age");
var phoneNumber = document.getElementById("phoneNumber");
var displayDetails = document.getElementById("displayDetails");

var studentDetails = new Object();

function onDisplayDetails() {
  studentDetails.firstName = firstName.value;
  studentDetails.lastName = lastName.value;
  studentDetails.email = email.value;
  studentDetails.phoneNumber = phoneNumber.value;
  studentDetails.age = age.value;
  displayDetails.innerHTML = "First Name: " + studentDetails.firstName + "<br>" + 
                            "Last Name: " + studentDetails.lastName + "<br>" + 
                            "Email: " + studentDetails.email + "<br>" + 
                            "Phone Number: " + studentDetails.phoneNumber + "<br>" + 
                            "Age: " + studentDetails.age + "<br>"
}

function changeStyle() {
  firstName.style = "border: 2px solid green; padding: 5px";
}

function resetStyle() {
  firstName.style = "";
}


function add() {
  var fn = parseInt(firstNumber.value);
  var sn = parseInt(secondNumber.value);
  // Add two numbers
  var result = fn + sn;
  // Display Result
  displayResult.innerText = fn + " + " + sn + " = " + result + " : " + checkType(result);
}

function subtract() {
  var fn = parseInt(firstNumber.value);
  var sn = parseInt(secondNumber.value);
  // Subtract two numbers
  var result = fn - sn;
  // Display Result
  displayResult.innerText = fn + " - " + sn + " = " + result + " : " + checkType(result);
}

function multiply() {
  var fn = parseInt(firstNumber.value);
  var sn = parseInt(secondNumber.value);
  // Add two numbers
  var result = fn * sn;
  // Display Result
  displayResult.innerText = fn + " * " + sn + " = " + result + " : " + checkType(result);
}

function divide() {
  var fn = parseFloat(firstNumber.value);
  var sn = parseFloat(secondNumber.value);
  // Add two numbers
  var result = fn / sn;
  // Display Result
  displayResult.innerText = fn + " / " + sn + " = " + result + " : " + checkType(result);
}

function checkType(num) {
  if (num % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";    
  }
}


