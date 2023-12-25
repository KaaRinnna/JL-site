var icon = document.getElementById("icon");

icon.onclick = function () {
   document.body.classList.toggle("light-theme");
   if (document.body.classList.contains("light-theme")) {
      icon.src = "img/icons/moon.png";
   } else {
      icon.src = "img/icons/sun.png";
   }
}