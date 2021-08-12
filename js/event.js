// Event Handler
// Background Color Red
function colorRed() {
  document.body.style.backgroundColor = "red";
}

// Background Color Blue
const blue = document.getElementById("button-blue");
blue.onclick = colorBlue;

function colorBlue() {
  document.body.style.backgroundColor = "blue";
}