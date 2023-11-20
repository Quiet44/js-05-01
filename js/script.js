var button = Document.querySelector(".show-cat");
var cat = document.querySelector(".cat");


button.addEventsListener("click", function () {
   cat.classList.add("show");
});