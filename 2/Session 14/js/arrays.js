// Single Dimensional Arrays

// Declaring an array - method 1
// var days = new Array(7); //Declaration
// days[0] = "Monday"; // Initialization
// days[1] = "Tuesday";
// days[2] = "Wednessday";
// days[3] = "Thursday";
// days[4] = "Friday";
// days[5] = "Saturday";
// days[6] = "Sunday";

// Declaring an array - method 2
// var days = new Array("Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday");

// Declaring an array - method 3
var days = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"];

// Looping through the array using a for loop
for(var i = 0; i < days.length; i++){
  document.writeln("Day " + (i + 1) + ": " + days[i] + "<br>");
}

document.writeln("<hr>");

var count = 1;

// Looping through the array using a for in loop
for(day in days){
  document.writeln("Day " + count + ": " + days[day] + "<br>");
  count++;
}

document.writeln("<hr>");

var friends = new Array(3);
for(var i = 0; i < friends.length; i++){
  friends[i] = prompt("Enter your friend's name:");
}
document.writeln("Your friends are: <br>");

for (f in friends) {
  document.writeln(friends[f] + "<br>");
}

document.writeln("<hr>");

document.writeln("Adding Johnson to the friends list <br>");
friends.push("Johnson");
for (f in friends) {
  document.writeln(friends[f] + "<br>");
}

document.writeln("<hr>");

document.writeln("Removing the last element from the friends list <br>");
friends.pop();
for (f in friends) {
  document.writeln(friends[f] + "<br>");
}

document.writeln("<hr>");

document.writeln("Displaying the friends list using the join method <br>");
document.writeln(friends.join());
document.writeln(friends.join(" - "));
document.writeln(friends.join(" | "));
document.writeln("<br>");
document.writeln(friends.join("<br>"));
