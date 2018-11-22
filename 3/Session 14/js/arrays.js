// var friends = new Array(3);
// friends[0] = "John";
// friends[1] = "Mary";
// friends[2] = "Steve";

// document.writeln(friends[0] + "<br />");
// document.writeln(friends[1] + "<br />");
// document.writeln(friends[2] + "<br />");

// Change the last element
// friends[2] = "Funke";

// document.writeln(friends[0] + "<br />");
// document.writeln(friends[1] + "<br />");
// document.writeln(friends[2] + "<br />");

var friends = ["John", "Mary", "Funke"];

for (var friend in friends) {  document.writeln(friends[friend] + "<br />");
}

document.writeln("<h2>Using the for loop</h2>")

for(var i = 0; i < friends.length; i++){
  document.writeln(friends[i] + "<br />");
}