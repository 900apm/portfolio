$(document).ready(function () {

  let sophieHtml = (
  '<div class="sophie-window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'sophie'+
      '</h2>'+
      '<iframe src="https://900apm.github.io/xiaoge_deng_project2/index.html"></iframe>'+
  '</div>');

  let asciiHtml = (
  '<div class="ascii-window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'ascii'+
      '</h2>'+
    '<iframe src="https://900apm.github.io/ASCII-ASTEROIDS"></iframe>'+
  '</div>');

  let pieceHtml = (
  '<div class="piece-window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'ascii'+
      '</h2>'+
    '<iframe src="https://piece-by-peace.firebaseapp.com/"></iframe>'+
  '</div>');

  $(".sophie")
  .draggable({
    scroll: true,
    cursor: "grab",
    containment: "main"
  })
    
    .on("click", function () {
      if ($('.sophie-window').length === 0) {
        $("main").append(sophieHtml);
        $(".sophie-window")
          .draggable({ containment: "main" })
          .resizable({
            containment: "main",
            minWidth: 320,
            minHeight: 500,
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
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
        $("main").append(asciiHtml);
        $(".ascii-window")
          .draggable({ containment: "main" })
          .resizable({
            containment: "main",
            minWidth: 320,
            minHeight: 500,
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
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

  $(".piece")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "main"
    })

    .on("click", function () {
      if ($('.piece-window').length === 0) {
        $("main").append(pieceHtml);
        $(".piece-window")
          .draggable({ containment: "main" })
          .resizable({
            containment: "main",
            minWidth: 320,
            minHeight: 500,
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .on("click", function () {
            $(this).addClass('top').removeClass('bottom');
            $(this).siblings().removeClass('top').addClass('bottom');
          })
      }
      $(".piece-window .close")
        .on("click", function () {
          $(this).parents(".piece-window").remove()
        });
      // full screen 
      $(".piece-window .enlarge")
        .on("click", function () {
          $(this).parents(".piece-window").toggleClass("fullscreen")
        });
    });



// document ready closing tag
});




