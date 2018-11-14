var numOne = 20;
var numTwo = 10;
var result = numOne * numTwo;

// alert(result);

document.writeln("Pre Increment: " + ++numOne + "<br>");
document.writeln("Pre Decrement: " + --numOne + "<br>");

document.writeln("Post Increment: " + numOne++ + "<br>");
document.writeln("numOne after Post Increment: " + numOne + "<br>");

document.writeln("Post Decrement: " + numOne-- + "<br>");
document.writeln("numOne after Post Decrement: " + numOne + "<br>");

if (numOne < 10) {

  alert("numOne is greater than 10");

} else if(numOne === 20){
  
  alert("numOne is equal to 20");
  
  if (isNaN(numOne)) {
    alert("Yes numOne is a number");
  } else {
    alert("No, numOne is not a number");
  }

} else {
  alert("numOne is not greater than 10");
}
