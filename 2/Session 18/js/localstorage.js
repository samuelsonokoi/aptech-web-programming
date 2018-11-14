// Check Local storage support
if ( ('localStorage' in window) && window['localStorage'] !== null ) {
  alert("Local Storage supported");
} else {
  alert("Sorry, your browser does not support local storage");
}

// TODO function that gives the value of the input in an alert

function saveName() {
  var name = document.getElementById("name").value;
  
  // Save to localStorage
  window.localStorage.setItem("name", name);
  alert("Name has been successfully saved.");
}

function getName() {
  // Retrieve from localStorage
  var name = window.localStorage.getItem("name");
  alert("Name found: " + name);
}

function deleteName() {
  // Remove from localStorage
  window.localStorage.removeItem("name");
  alert("Successfully deleted");
}

function clear() {
  // Clear localStorage
  window.localStorage.clear();
  alert("Successfully cleared localStorage");
}

// This function will call itself when the page loads
(function text() {

  // Get the text value of the h1 tag
  var text = document.getElementById("heading").innerText;
  alert(text);
  
  // Set the text value of the h1 tag to a new value
  document.getElementById("heading").innerText = "Working With HTML5 Web Storage";

})();