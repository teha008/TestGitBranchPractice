let button = document.getElementById("button");

button.addEventListener("click", function (event) {
  alert("버튼 클릭");
  document.getElementById("body").setAttribute("style", "background-color: red;");
});
