var button = document.getElementById("menubar");
var menu = document.getElementById("menu");
 
button.addEventListener("click", function () {
  menu.classList.toggle("open");
});
 

menu.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    menu.classList.remove("open");
  }
});
 