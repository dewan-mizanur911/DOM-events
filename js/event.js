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

 // annonymus function
       const greenButton =  document.getElementById('button-green');
       greenButton.onclick = function (){
           document.body.style.backgroundColor = 'green';
}
       
 // using addEventListener
       const goldenRod = document.getElementById('button-golden-rod');
       goldenRod.addEventListener('click', colorGoldenRod)
       function colorGoldenRod(){
           document.body.style.backgroundColor = 'goldenrod';
}
       
 // addEventListener with anonymous function
       const hotPink = document.getElementById('button-hot-pink');
       hotPink.addEventListener('click', function (){
           document.body.style.backgroundColor = 'hotpink';
       })

  // Direct code
       document.getElementById('button-light-blue').addEventListener('click', function (){
           document.body.style.backgroundColor = 'lightblue';
       })