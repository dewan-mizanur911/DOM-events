/*
        const listItems = document.getElementsByClassName('list-item');
        for(const item of listItems){
            item.addEventListener('click', function(event){
                event.target.parentNode.removeChild(event.target);
            })
        } 
        */

document.getElementById("add-item").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = "Added New item";

  document.getElementById("list").appendChild(newItem);
});
document.getElementById("list").addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});
