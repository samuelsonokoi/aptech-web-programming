// var age = prompt("How old are you?");

// if statement
// if (age >= 18) {
//   alert("You are an adult.");
// }

// if else statement
// if(age >= 18){
//   alert("You are 18+");
// } else {
//   alert("Sorry you are not yet 18");
// }

// if else if / if else ladder
// if (age <= 7) {
//   alert("You are a toddler");
// } else if(age < 18){
//   alert("You are a teenager");
// } else if(age >= 18 && age <= 110){
//   alert("You're an adult");
// } else if(age > 110) {
//   alert("You cannot be " + age + " old.");
// } else {
//   alert("Sorry invalid age");
// }

// var username = prompt("Username");
// var password = prompt("Password");

// if (username === "john" || password === "admin") {
//   alert("Hello John, Good Afternoon.");
// } else {
//   alert("Invalid username or password");
// }

var luckyNumber = parseInt(prompt("Choose a lucky number between 1 - 10"));
switch (luckyNumber) {
  case 1:
    alert("Sorry please try again");
    break;
  case 5:
    alert("Try again");
    break;
  case 8:
    alert("Hurray you won the game!!!");
    break;
  case 10:
    alert("Sorry try one more time");
    break;
  default:
    if (luckyNumber === 2 || luckyNumber === 3 || luckyNumber === 4 || luckyNumber === 6 || luckyNumber === 7 || luckyNumber === 9 ) {
      alert("Sorry you failed");
    }
    if (isNaN(luckyNumber)) {
      alert("Invalid selection");
    } else if(luckyNumber < 1) {
      alert("You must a number greater than 1");
    } else if(luckyNumber > 10){
      alert("Please a humber less than 10");
    }
    break;
}
