if (!'sessionStorage in window' && !window['sessionStorage']) {
  console.error("Session storage not supported")
}

var name, email, age;

function save() {
  // Get all the values from the input fields
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  age = document.getElementById("age").value;


  // Setting a key called name with the value from the name variable
  window.sessionStorage.setItem("name", name);
  window.sessionStorage.setItem("email", email);
  window.sessionStorage.setItem("age", age);

  alert("Saved successfully.")
  
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

function display() {
  // Get the saved key from the session storage
  var n = window.sessionStorage.getItem("name");
  var e = window.sessionStorage.getItem("email");
  var a = window.sessionStorage.getItem("age");

  var data = `Name: ${n}, Email: ${e}, Age: ${a}`

  document.getElementById("result").textContent = data;
}

// Assignment - code the remove function
function remove(key) {
  
}

// Assignment - code the clear function
function clear() {
  
}