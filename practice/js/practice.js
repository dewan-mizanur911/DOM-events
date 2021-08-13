// color lightblue - 1st way
 function colorLightBlue() {
   document.body.style.backgroundColor = "lightblue";
}
 
// color yellow - 2nd way
document.getElementById("btn-yellow").onclick = colorYellow;
function colorYellow() {
  document.body.style.backgroundColor = "yellow";
}

// color green - 3rd way
document.getElementById("btn-green").onclick = function colorGreen() {
  document.body.style.backgroundColor = "green";
};

// color hot pink -4th way anonymous function
document.getElementById("btn-hot-pink").onclick = function () {
  document.body.style.backgroundColor = "hotpink";
};

// color goldenrod -5th way Direct code
document.getElementById("btn-golden-rod").addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });