$(document).ready(function () {

  let shutterHtml = (
  '<div class="shutter-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'shutter'+
      '</h2>'+
      '<iframe src="https://900apm.github.io/xiaoge_deng_project1/"></iframe>'+
  '</div>');

  let sophieHtml = (
  '<div class="sophie-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'sophie'+
      '</h2>'+
      '<iframe src="https://900apm.github.io/xiaoge_deng_project2/index.html"></iframe>'+
  '</div>');

  let asciiHtml = (
  '<div class="ascii-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'ascii'+
      '</h2>'+
    '<iframe src="https://900apm.github.io/ASCII-ASTEROIDS"></iframe>'+
  '</div>');

  let pieceHtml = (
  '<div class="piece-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'piece by peace'+
      '</h2>'+
    '<iframe src="https://piece-by-peace.firebaseapp.com/"></iframe>'+
  '</div>');

  let answersHtml = (
  '<div class="answers-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'ajax answers'+
      '</h2>'+
    '<iframe src="http://xiaogedeng.com/project4_Xiaoge_Amy-master/#questions"></iframe>'+
  '</div>');

  let notesHtml = (
  '<div class="notes-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'ajax answers'+
      '</h2>'+
    '<iframe src="https://no-name-notes.firebaseapp.com/"></iframe>'+
  '</div>');

  let aboutHtml = (
  '<div class="about-window window">'+
      '<h2>'+
          '<button class="enlarge">☐</button>'+
          '<button class="close">x</button>'+
          'about me'+
      '</h2>'+
    "<p> Hello! I'm Xiaoge Deng </p>"+
    "<p> Welcome to my site Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque assumenda saepe itaque illum provident explicabo voluptatem ducimus voluptatum nulla facere ipsam minus perspiciatis atque tempore dolore laudantium est, numquam exercitationem cupiditate? Eaque ullam molestias natus veritatis hic modi. Nesciunt perferendis fugiat dignissimos qui corrupti porro sint tenetur laudantium deleniti, amet recusandae minus quis est veritatis placeat facilis. Odit amet quidem, maiores dicta aperiam dolorum modi nihil perferendis in corrupti consectetur rem quia ipsum, nesciunt sed consequuntur illum quibusdam laborum eos ipsam! Animi dignissimos saepe veniam? Odit ullam aperiam culpa reprehenderit a debitis laudantium, veritatis voluptatem beatae inventore voluptates? Ea. </p>"+
  '</div>'); 
  
  // sophie window
  $(".sophie")
  .draggable({
    scroll: true,
    cursor: "grab",
    containment: "body"
  })
    
    .on("click", function () {
      if ($('.sophie-window').length === 0) {
        $("main").append(sophieHtml);
        $(".sophie-window")
          .draggable({ 
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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

  // shutter window
  $(".shutter")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "body"
    })

    .on("click", function () {
      if ($('.shutter-window').length === 0) {
        $("main").append(shutterHtml);
        $(".shutter-window")
          .draggable({
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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
      $(".shutter-window .close")
        .on("click", function () {
          $(this).parents(".shutter-window").remove()
        });
    });
  
  // ASCII ASTEROIDS window
  $(".ascii")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "body"
    })

    .on("click", function () {
      if ($('.ascii-window').length === 0) {
        $("main").append(asciiHtml);
        $(".ascii-window")
          .draggable({ 
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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
  
  // piece by peace window
  $(".piece")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "body"
    })

    .on("click", function () {
      if ($('.piece-window').length === 0) {
        $("main").append(pieceHtml);
        $(".piece-window")
          .draggable({ 
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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
      // $(".piece-window .enlarge")
      //   .on("click", function () {
      //     $(this).parents(".piece-window").toggleClass("fullscreen")
      //   });
    });
  
  // Ajax Answers window
  $(".answers")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "body"
    })

    .on("click", function () {
      if ($('.answers-window').length === 0) {
        $("main").append(answersHtml);
        $(".answers-window")
          .draggable({
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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
      $(".answers-window .close")
        .on("click", function () {
          $(this).parents(".answers-window").remove()
        });
    });

  // no-name notes window
  $(".notes")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "body"
    })

    .on("click", function () {
      if ($('.notes-window').length === 0) {
        $("main").append(notesHtml);
        $(".notes-window")
          .draggable({
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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
      $(".notes-window .close")
        .on("click", function () {
          $(this).parents(".notes-window").remove()
        });
    });

  // about me window
  $(".about")
    .draggable({
      scroll: true,
      cursor: "grab",
      containment: "body"
    })

    .on("click", function () {
      if ($('.about-window').length === 0) {
        $("main").append(aboutHtml);
        $(".about-window")
          .draggable({
            containment: "body",
            start: function () {
              $('iframe').css('pointer-events', 'none');
            },
            stop: function () {
              $('iframe').css('pointer-events', 'auto');
            }
          })
          .resizable({
            containment: "body",
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
      $(".about-window .close")
        .on("click", function () {
          $(this).parents(".about-window").remove()
        });
    });

  // clock that displays current time in AM or PM
  function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayOrNight = "AM";

    if (hours == 0) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours - 12;
      dayOrNight = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + dayOrNight;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;

    setTimeout(showTime, 1000);

  }

  showTime();



// document ready closing tag
});




