document.getElementById("post").addEventListener("click", function () {
  const getComment = document.getElementById("comment");
  const createComment = document.createElement("p");
  createComment.innerText = getComment.value;

  document.getElementById("comments").appendChild(createComment);
  getComment.value = "";
});
