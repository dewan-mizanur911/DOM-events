document.getElementById("btn-delete").addEventListener("click", function () {
  document.getElementById("paragraph").style.display = "none";
  document.getElementById("input").value = "";
});

document.getElementById("input").addEventListener("focus", function () {
  document.body.style.backgroundColor = "coral";
});
document.getElementById("input").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

document.getElementById("input").addEventListener("keyup", function (event) {
  const buttonDelete = document.getElementById("btn-delete");
  if (event.target.value == "delete") {
    buttonDelete.removeAttribute("disabled");
  } else {
    buttonDelete.setAttribute("disabled", true);
  }
});
