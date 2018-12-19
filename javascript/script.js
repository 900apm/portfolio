$(document).ready(function () {

  let shutterHtml = (
  '<div class="shutter-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>shutter</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
      '<iframe src="https://900apm.github.io/xiaoge_deng_project1/"></iframe>'+
  '</div>');

  let sophieHtml = (
  '<div class="sophie-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>sophie</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
      '<iframe src="https://900apm.github.io/xiaoge_deng_project2/index.html"></iframe>'+
  '</div>');

  let asciiHtml = (
  '<div class="ascii-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>ASCII</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    '<iframe src="https://900apm.github.io/ASCII-ASTEROIDS"></iframe>'+
  '</div>');

  let pieceHtml = (
  '<div class="piece-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>piece</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    '<iframe src="https://piece-by-peace.firebaseapp.com/"></iframe>'+
  '</div>');

  let answersHtml = (
  '<div class="answers-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>answers</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    '<iframe src="http://xiaogedeng.com/ajaxanswers/"></iframe>'+
  '</div>');

  let notesHtml = (
  '<div class="notes-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>notes</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    '<iframe src="https://no-name-notes.firebaseapp.com/"></iframe>'+
  '</div>');

  let aboutHtml = (
  '<div class="about-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>about</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    "<p> Hello! I'm Xiaoge Deng </p>"+
    "<p> Welcome to my site Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque assumenda saepe itaque illum provident explicabo voluptatem ducimus voluptatum nulla facere ipsam minus perspiciatis atque tempore dolore laudantium est, numquam exercitationem cupiditate? Eaque ullam molestias natus veritatis hic modi. Nesciunt perferendis fugiat dignissimos qui </p>"+
    '<div class="icons">'+
      '<i class="fab fa-twitter"></i>'+
      '<i class="fab fa-linkedin"></i>'+
      '<i class="fab fa-github-square"></i>'+
      '<i class="fab fa-medium"></i>'+
      '<i class="fab fa-codepen"></i>'+
    '</div>'+
    
  '</div>');

  let contactHtml = (
  '<div class="contact-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>contact</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    '<aside>'+
      '<h3>lets talk</h3>'+
      '<p>xiaoge.deng@protonmail.com</p>'+
      '<form action="">'+
        '<input type="text" placeholder="name">'+
        '<input type="email" placeholder="email">'+
        '<input type="text" placeholder="message">'+
        '<input type="submit" value="submit">'+
      '</form>'+
    '</aside>'+
  '</div>');

  let portfolioHtml = (
  '<div class="portfolio-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>portfolio</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
    '<h3>Sophie</h3>'+
    '<p>multi-page responsive website created with flexbox, sass and css grids</p>'+
    '<h3>Shutter</h3>' +
    '<p>single-page responsive website created with floats</p>' +
    '<h3>ASCII ASTEROIDS</h3>' +
    '<p>ascii text based responsive game created with javascript and jQuery</p>' +
    '<h3>Ajax Answers</h3>' +
    '<p>trivia game created with ajax and jService API</p>' +
    '<h3>No-name Notes</h3>' +
    '<p>note taking app created with react and firebase</p>' +
    '<h3>Piece by Peace</h3>' +
    '<p>multi-page react app created with firebase and sass</p>' +
  '</div>');

  let readmeHtml = (
  '<div class="readme-window window">'+
      '<top-bar>'+
          '<button class="enlarge">□</button>'+
          '<button class="close">x</button>'+
          '<h2>readme</h2>'+
          '<div class="bar1"></div>'+
          '<div class="bar2"></div>'+
          '<div class="bar3"></div>'+
          '<div class="bar4"></div>'+
          '<div class="bar5"></div>'+
          '<div class="bar6"></div>'+
          '<div class="bar7"></div>'+
      '</top-bar>'+
      "<p>Hi! Welcome to my site, Click any icon to begin.</p>"+
      "<p>‐ windows are able to be resized with the arrow positioned on the bottom right</p>"+
      "<p>‐ windows are able to be repositioned by dragging the window header</p>"+
      "<p>‐ to move a window to the front; click on the desired window's header</p>" +
      "<p>‐ buttons on top right toggle fullscreen and close the window respectively.</p>"+
      "<p>xiaoge.deng@protonmail.com</p>"+
  '</div>');



  function runOnStart() {
      // on start add read me window to the page
      $("main").append(readmeHtml);
      $(".readme-window")
        .draggable({
          containment: "body",
          cancel: "p",
          start: function () {
            $('iframe').css('pointer-events', 'none');
            $(this).removeAttr('id');
          },
          stop: function () {
            $('iframe').css('pointer-events', 'auto');
          }
        })
        .resizable({
          containment: "body",
          minWidth: 300,
          minHeight: 485,
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
        

      // close readme-window button
      $(".readme-window .close")
        .on("click", function () {
          $(this).parents(".readme-window").remove()
        });

      // resize readme-window button
      $(".readme-window .enlarge")
        .on("click", function () {
          clickCounter += 1;
          if (clickCounter % 2 != 0) {
            $(this).parents(".readme-window").animate({
              top: "0",
              left: "0",
              right: "0",
              height: "100%",
              width: "100%"
            });
          }
          else {
            $(".readme-window").attr("id", "left");
            $(this).parents(".readme-window").animate({
              top: "2.5%",
              right: "2.5%",
              height: "485",
              width: "300"
            })
          }
        });
    };
  

  window.onload = runOnStart;
  
  // used to check if window is full screen or not
  let clickCounter = 0;
  
  // makes icons draggable
  $(".icon").draggable({
    scroll: true,
    cursor: "grab",
    containment: "body",
    start: function () {
      $(this).addClass('dragged');
    },
    stop: function () {
      $(this).removeClass('dragged');
    }
  })
  
  // sophie window
  $(".sophie").on("click", function () {
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
    
    // close sophie-window button
    $(".sophie-window .close")
      .on("click", function () {
        $(this).parents(".sophie-window").remove()
      });
    
    // resize sophie-window button
    $(".sophie-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".sophie-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".sophie-window").animate({
            top: "2.5%",
            left: "17.5%",
            height: "500",
            width: "810"
          });
        }
      });
  });

  // shutter window
  $(".shutter").on("click", function () {
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

    // close shutter-window button
    $(".shutter-window .close")
      .on("click", function () {
        $(this).parents(".shutter-window").remove()
      });

    // resize shutter-window
    $(".shutter-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0){
          $(this).parents(".shutter-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".shutter-window").animate({
            top: "5%",
            left: "32.5%",
            height: "500",
            width: "400"
          });
        }
    });
  });
  
  // ASCII ASTEROIDS window
  $(".ascii").on("click", function () {
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

    // close ascii-window button
    $(".ascii-window .close")
      .on("click", function () {
        $(this).parents(".ascii-window").remove()
      });

    // resize ascii-window button
    $(".ascii-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".ascii-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".ascii-window").animate({
            top: "7.5",
            left: "25%",
            height: "533",
            width: "575"
          });
        }
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

    // close piece-window button
    $(".piece-window .close")
      .on("click", function () {
        $(this).parents(".piece-window").remove()
      });
    
    // resize piece-window button
    $(".piece-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".piece-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".piece-window").animate({
            top: "2.5%",
            left: "32.5%",
            height: "600",
            width: "400"
          });
        }
      });

  });
  
  // Ajax Answers window
  $(".answers").on("click", function () {
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

    // close answers-window button
    $(".answers-window .close")
      .on("click", function () {
        $(this).parents(".answers-window").remove()
      });
    
    // resize answers-window button
    $(".answers-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".answers-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".answers-window").animate({
            top: "5%",
            left: "28%",
            height: "550",
            width: "500"
          });
        }
      });
  });

  // no-name notes window
  $(".notes").on("click", function () {
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

    // close notes-window button
    $(".notes-window .close")
      .on("click", function () {
        $(this).parents(".notes-window").remove()
      });
    
    // resize notes-window button
    $(".notes-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".notes-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".notes-window").animate({
            top: "2.5%",
            left: "32.5%",
            height: "525",
            width: "400"
          });
        }
      });
  });

  // about me window
  $(".about").on("click", function () {
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

    // closes about-window button
    $(".about-window .close")
      .on("click", function () {
        $(this).parents(".about-window").remove()
      });
    
    // resize about-window button
    $(".about-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".about-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".about-window").animate({
            top: "7.5%",
            left: "28%",
            height: "500",
            width: "500"
          });
        }
      });
  });
  
  // contact me window
  $(".contact").on("click", function () {
    if ($('.contact-window').length === 0) {
      $("main").append(contactHtml);
      $(".contact-window")
        .draggable({
          containment: "body",
          cancel: "aside",
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
          minHeight: 300,
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

    // closes contact-window button
    $(".contact-window .close")
      .on("click", function () {
        $(this).parents(".contact-window").remove()
      });

    // resize contact-window button
    $(".contact-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".contact-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".contact-window").animate({
            top: "10%",
            left: "32.5%",
            height: "300",
            width: "400"
          });
        }
      });
  });

  // portfolio window
  $(".portfolio").on("click", function () {
    if ($('.portfolio-window').length === 0) {
      $("main").append(portfolioHtml);
      $(".portfolio-window")
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
          minHeight: 200,
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

    // closes portfolio-window button
    $(".portfolio-window .close")
      .on("click", function () {
        $(this).parents(".portfolio-window").remove()
      });
    
    // resize portfolio-window button
    $(".portfolio-window .enlarge")
      .on("click", function () {
        clickCounter += 1;
        if (clickCounter % 2 != 0) {
          $(this).parents(".portfolio-window").animate({
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          });
        }
        else {
          $(this).parents(".portfolio-window").animate({
            top: "5%",
            left: "17.5%",
            height: "550",
            width: "810"
          });
        }
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