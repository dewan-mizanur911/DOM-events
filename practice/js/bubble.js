const elements = document.getElementsByClassName("list-item");
console.log(elements);
for (const element of elements) {
  element.addEventListener("click", function (event) {
    console.log(event.target);
  });
}
document
  .getElementById("third-item")
  .addEventListener("click", function (event) {
    event.stopPropagation;
  });
