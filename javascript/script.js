$(document).ready(function () {

  let sophiehtml = (
  '<div class="sophie-window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'sophie'+
      '</h2>'+
      '<iframe src="https://900apm.github.io/xiaoge_deng_project2/index.html"></iframe>'+
  '</div>');

  let asciihtml = (
  '<div class="ascii-window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'ascii'+
      '</h2>'+
    '<iframe src="https://900apm.github.io/ASCII-ASTEROIDS"></iframe>'+
  '</div>');

  $(".sophie")
  .draggable({
    scroll: true,
    cursor: "grab",
    containment: "main"
  })
    
    .on("click", function () {
      if ($('.sophie-window').length === 0) {
        $("main").append(sophiehtml);
        $(".sophie-window")
          .draggable({ containment: "main" })
          .resizable({
            containment: "main",
            minWidth: 320,
            minHeight: 500
          })
          
        .on("click", function () {
          $(this).addClass('top').removeClass('bottom');
          $(this).siblings().removeClass('top').addClass('bottom');
        })
      }
      $(".sophie-window .close")
        .on("click", function () {
          $(this).parents(".sophie-window").remove()
        });
    });

  $(".ascii")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "main"
    })

    .on("click", function () {
      if ($('.ascii-window').length === 0) {
        $("main").append(asciihtml);
        $(".ascii-window")
          .draggable({ containment: "main" })
          .resizable({
            containment: "main",
            minWidth: 320,
            minHeight: 500
          })
        .on("click", function () {
          $(this).addClass('top').removeClass('bottom');
          $(this).siblings().removeClass('top').addClass('bottom');
        })
      }
      $(".ascii-window .close")
        .on("click", function () {
          $(this).parents(".ascii-window").remove()
        });
    });
  
  // $(".ascii")
  //   .draggable({
  //     scroll: true,
  //     cursor: "grab",
  //     containment: "main"
  //   })

  //   .on("click", function () {
  //     var source = "<iframe src='https://900apm.github.io/ASCII-ASTEROIDS'></iframe>";   
  //     $(".ascii-window").show().append(source);
  //   });
  
  // $(".ascii-window .close")
  //   .on("click", function () {
  //     $(".ascii-window").hide()
  //   });
  
  $(".piece")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "main"
    })

    .on("click", function () {
      var source = "<iframe src='https://piece-by-peace.firebaseapp.com/'></iframe>";
      $(".piece-window").show().append(source);
    });
  
  $(".sophie-window, .ascii-window, .piece-window")
  .draggable({ 
    containment: "main",
    // stack: ".window",
    // do not drag content ( content is not draggable anyways because of iframe)
    // cancel: ".content"

  })

  .resizable({
    containment: "main",
    minWidth: 320,
    minHeight: 500
  })

  .on("click", function () {
    $(this).addClass('top').removeClass('bottom');
    $(this).siblings().removeClass('top').addClass('bottom');
  })

  // // close button on window
  // $(".close")
  // .on("click", function () {
  //   $(".sophie-window, .ascii-window, .piece-window").hide()
  // });

  // fullscreen button on window
  $(".enlarge")
  .on("click", function () {
    $(".sophie-window, .ascii-window, .piece-window").toggleClass("fullscreen");
  }); 


// document ready closing tag
});




