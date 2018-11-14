var number = 10;

// While Loop
// while(number >= 0){
//   document.writeln("<p>" + number + "</p>");

//   number--;
// }

// DoWhile Loop
// do{
//   document.writeln("<p>" + number + "</p>");
//   number++;
// }while(number <= 15);

// var num = 2;

// For Loop
// for(var i = 1; i <= 12; i++ ){
//   document.writeln("<p>" + num + " * " + i + " = " + eval(num * i) + "</p>");
// }

// Declaring an Array
var names = new Array(3);

// Initializing the array
names[0] = "John Doe";
names[1] = "James Doe";
names[2] = "Jane Doe";

document.writeln("<h2> List of Names </h2>");
document.writeln("<p>" + names[0] + "</p>");
document.writeln("<p>" + names[1] + "</p>");
document.writeln("<p>" + names[2] + "</p>");

// Shorter way of declaring a single dimensional array
var states = ["Abia", "Lagos", "Ogun"];

document.writeln("<h2> List of States Using For Loop </h2>");

// Printing the list using a for loop
for(var i = 0; i < states.length; i++){
  document.writeln("<p>" + states[i] + "</p>");
}

document.writeln("<h2>List of States Using For In Loop </h2>");

// Printing the list using a for in loop
for (var state in states) {
  document.writeln("<p>" + states[state] + "</p>");
}

// ToDo Application
document.writeln("<h2>ToDo List</h2>");
var todo = [];

document.writeln("<input type='text' placeholder='Please enter a task' required focus id='todo' />");
document.writeln("<button onclick='add()'>Add +</button>");

// Creating a function to display todo list
function displayToDo(){
  alert(todo.sort().join(", "));
}

// Creating a function to add todo
function add() {
  // Get the value of the input
  var task = document.getElementById("todo").value;
  todo.push(task);
  displayToDo();
}

