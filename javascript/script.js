$(document).ready(function () {
  $('.draggable').draggable({
    scroll: true,
    cursor: "move",
    containment: "main"
  });
  console.log("im working");
});