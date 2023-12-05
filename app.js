document.getElementById("filter").addEventListener("click", function () {
  var year = prompt("Enter a year to filter by:");

  var images = document.querySelectorAll("img");

  images.forEach(function (image) {
    if (image.getAttribute("data-year") === year) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});
