$(document).ready(function () {

  $(".draggable")
  .draggable({
    scroll: true,
    cursor: "grab",
    containment: "main"
  })
    
    .on("click", function () {
      $(".window").show()
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

  // close button on window
  $(".close")
  .on("click", function () {
    $(".window").hide()
  });

  // fullscreen button on window
  // $(".enlarge")
  // .on("click", function () {
  //   $(".window").toggleClass("fullscreen");
  // }); 


// document ready closing tag
});




