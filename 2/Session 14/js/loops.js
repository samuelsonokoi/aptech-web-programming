// For Loop Construct
var number = 1;

// While loop
// while (number <= 10) {
//   document.writeln(number + "<br>");

//   // Modify the variable to avoid an infinite loop
//   number++;
// }

// Do While loop
// do {
//   document.writeln(number + "<br>");

//   // Modify the variable to avoid an infinite loop
//   number++;
// } while (number <= 10);

// For Loop
var start = parseInt(prompt("Enter a number"));

for(var i = 1; i <= 12; i++){
  document.writeln(start + " * " + i + " = " + start * i + "<br>");
}