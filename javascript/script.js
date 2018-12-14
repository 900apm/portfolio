$(document).ready(function () {

  $(".draggable")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "main"
    })
    .on("click", function () {
      div = document.createElement('div');
      // adding new window to DOM
      $(div).addClass("window");
      $("#container").append(div);
      // functionality for window
      $(".window").draggable({
        scroll: true,
        cursor: "grab",
        containment: "main"
      }).resizable();
    }); 

});




