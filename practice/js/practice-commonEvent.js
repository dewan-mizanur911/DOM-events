function changeP() {
  document.getElementById("paragraph").innerText = "Chaged by onclick event";
}

document.getElementById("direct-change").addEventListener("click", function () {
  document.getElementById("paragraph").innerText = "Chaged by AddEVentListener";
});

document.getElementById("update").addEventListener("click", function () {
  const input = document.getElementById("input");
  document.getElementById("paragraph").innerText = input.vlaue;
});
