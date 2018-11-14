function confirmStorage() {
  if (('sessionStorage' in window) && window['sessionStorage'] === null) {
    alert("Sorry! You need to upgrade your browser.");
  } else {
    console.info("Session Storage Supported");
  }
}

var count = 0;
var index = [];

function save(){
  var name = document.getElementById("name").value;
  count += 1;
  sessionStorage.setItem(count.toString(), name);
  index.push(count.toString());
  alert(sessionStorage.getItem(count.toString()));
}

function show() {
  var d = document.getElementById("display");
  for (var i = 0; i < count; i++) {
    d.innerHTML = " " + sessionStorage.getItem(count);
    alert(sessionStorage.getItem(i.toString()));
  }
}

// sessionStorage.clear();