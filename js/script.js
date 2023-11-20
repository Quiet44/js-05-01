var button = Document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// // When user clicks on the button, function is triggered to show cat image
button.addEventsListener("click", function () {
  if (cat.classList.contains("show")) {
   // console.log("yes");
  cat.classList.remove("show");
  button.innerText = "Wait, come back!";
  button.classList.add("disappeear");
} else {
   // console.log("No");
   cat.classList.add("show");
   button.innerText = "Shoo cat!";
   button.classList.remove("disappear");
}
});