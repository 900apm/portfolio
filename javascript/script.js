$(document).ready(function () {

  $(".draggable")
  .draggable({
    scroll: true,
    cursor: "grab",
    containment: "main"
  })
    
    .on("click", function () {
      $(".window").show().removeClass("fullscreen")
    }); 
  
  $(".window")
  .draggable({ 
    containment: "main",
    // do not drag content
    cancel: ".content"
  })
  .resizable({
    containment: "main"
  });

  $(".close")
  .on("click", function () {
    $(".window").hide()
  });

  $(".enlarge")
  .on("click", function () {
    $(".window").toggleClass("fullscreen");
  }); 


// document ready closing tag
});




