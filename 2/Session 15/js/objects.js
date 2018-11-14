// Direct Method Declaration
var student = new Object();

// Direct Method Assignment
student.firstName = "John";
student.lastName = "Doe";
student.email = "johndoe@example.com";
student.age = 30;
student.gender = "Male";

// Display the values of the student object
document.writeln("<p>First Name: " + student.firstName + "</p>");
document.writeln("<p>Last Name: " + student.lastName + "</p>");
document.writeln("<p>Email: " + student.email + "</p>");
document.writeln("<p>Age: " + student.age + "</p>");
document.writeln("<p>Gender: " + student.gender + "</p>");

// Template Method Declaration
function training(courseName, courseDuration, courseChapters, courseStatus){
  this.name = courseName;
  this.duration = courseDuration;
  this.chapters = courseChapters;
  this.status = courseStatus;
  this.currentSession = function (){
    return "Current Session is: Session 15";
  }
}

// Template Method Assignment
course = new training("HTML5 Responsive Web Design", 40, 19, "In Progress");

// Display the values of the course object
document.writeln("<hr>");
document.writeln("<p>Course Name: " + course.name + "</p>");
document.writeln("<p>Course Duration: " + course.duration + "</p>");
document.writeln("<p>Course Chapters: " + course.chapters + "</p>");
document.writeln("<p>Course Status: " + course.status + "</p>");
document.writeln("<p>Current Session: " + course.currentSession() + "</p>");
// Access the method in the training object
// course.currentSession();

// String Object
var fullName = new String("John Doe");

document.writeln("<hr>");
document.writeln("<p> Total Length: " + fullName.length + "</p>");
document.writeln("<p> String in Uppercase: " + fullName.toUpperCase() + "</p>");
document.writeln("<p> String in Lowercase: " + fullName.toLowerCase() + "</p>");
document.writeln("<p> String in Bold: " + fullName.bold() + "</p>");
document.writeln("<p> String in Red Color: " + fullName.fontcolor("red") + "</p>");
document.writeln("<p> String in Italice: " + fullName.italics() + "</p>");
document.writeln("<p> String with split: " + fullName.split(" ") + "</p>");


// Date Object
var date = new Date();

document.writeln("<hr>");
document.writeln("<p>Get Full Year: " + date.getFullYear() + "</p>");
document.writeln("<p>Get Date: " + date.getDate() + "</p>");
document.writeln("<p>Get Day: " + date.getDay() + "</p>");
document.writeln("<p>Get Month: " + date.getMonth() + "</p>");
document.writeln("<p>Get Hours: " + date.getHours() + "</p>");
document.writeln("<p>Get Minutes: " + date.getMinutes() + "</p>");

// Window Object
window.confirm("Do you want to continue?");

// History Object
document.writeln("<hr>");
document.writeln("<button onclick='forward()'>Click to Go Forward</button>");
document.writeln("<button onclick='back()'>Click to Go Back</button>");
document.writeln("<button onclick='go()'>Click to reload</button>");

function forward(){
  history.forward();
}

function back() {
  history.back();
}

function go(go) {
  history.go();
}

// Navigator Object
document.writeln("<hr>");
document.writeln("<p>Navigator appName: " + navigator.appName + "</p>");
document.writeln("<p>Navigator appVersion: " + navigator.appVersion + "</p>");
document.writeln("<p>Navigator appCodeName: " + navigator.appCodeName + "</p>");
document.writeln("<p>Navigator cookieEnabled: " + navigator.cookieEnabled + "</p>");
document.writeln("<p>Navigator vendor: " + navigator.vendor + "</p>");
document.writeln("<p>Navigator online: " + navigator.onLine + "</p>");

// Location Object
document.writeln("<hr>");
document.writeln("<p>Location Host: " + location.host + "</p>");
document.writeln("<p>Location Href: " + location.href + "</p>");
document.writeln("<p>Location Pathname: " + location.pathname + "</p>");
document.writeln("<p>Location Protocol: " + location.protocol + "</p>");
document.writeln("<button onclick='assign()'>Click to Assign</button>");
document.writeln("<button onclick='reload()'>Click to Reload</button>");
document.writeln("<button onclick='replace()'>Click to Replace</button>");

function assign() {
  location.assign("https://www.google.com");
}

function reload() {
  location.reload();
}

function replace() {
  location.replace("https://www.twitter.com");
}