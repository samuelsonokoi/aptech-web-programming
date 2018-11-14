var tasks = [];
document.writeln("<h2>My Task Application</h2>");

document.writeln("<button onclick='addNewTask()'>Add New Task</button>");
document.writeln("<button onclick='displayTask()'>Display Task</button>");

document.writeln("<h3>All Tasks</h3>");


function addNewTask(){
  var newTask = prompt("Enter new task: ");
  tasks.push(newTask);
}

function displayTask() {
  document.writeln("<h1> List Of Tasks</h1>");
  for (var task in tasks) {
    document.writeln(tasks[task] + "<br>");
  }
}
// display();

// function display() {
//   // document.writeln("<ul>");
//   for (var task in tasks) {
//     document.writeln(tasks[task] + "<br>");
//   }
//   // document.writeln("</ul>");
// }

// function displayTask() {
//   var taskDiv = document.getElementById("taskList");
//   for (var task in tasks) {
//     taskDiv.innerHTML = tasks[task];
//   }