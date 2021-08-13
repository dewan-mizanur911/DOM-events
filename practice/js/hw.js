document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("para1").innerText =
    document.getElementById("input1").value;
  document.getElementById("input1").value = "";
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("para2").innerText =
    document.getElementById("input2").value;
  document.getElementById("input2").value = "";
});

document.getElementById("btn3").addEventListener("click", function () {
  const para1 = document.getElementById("para1").innerText;
  const para2 = document.getElementById("para2").innerText;

  document.getElementById("para3").innerText =
    para1.toString() + " " + para2.toString();
});
