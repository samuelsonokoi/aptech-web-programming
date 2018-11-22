var num = 10;
var start = 2, end = 12;

// For Loop
/* for(var i = 1; i <= num; i++){
  document.writeln(i + "<br />");
} */

// Nested For Loop
for(i = start; i <= start; i++){
  for(j = 1; j <= end; j++){
    document.writeln(i + " * " + j + " = " + i * j + "<br />");
  }
}

// While Loop
// while (start <= num) {
//   document.writeln(start + "<br />");
//   start++;
// }

// Do While Loop
// do {
//   document.writeln(start + "<br />");
//   start++;
// } while (start <= num);