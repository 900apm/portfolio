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

  $(".close")
  .on("click", function () {
    $(".window").hide()
  }); 

  // $(".content").draggable({ cancel: '' })

// document ready closing tag
});




