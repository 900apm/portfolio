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
  "<p> Hi! I'm Xiaoge Deng </p>"+
  "<p> Welcome to my site. I'm a front end developer currently based on Toronto who has an obession with VR, Bitcoin and creating beautiful websites. I like to take my work seriously but not myself. Need a hand? I've got two.</p>"+
  
  "<p>You can find me online by clicking on any of the icons listed below or by clicking the contact icon. You can also email me directly at xiaoge.deng@protonmail.com (fan mail only)</p>"+

  '<div class="icon-social">'+
    '<a href="https://twitter.com/ChileanRoseHair"><i class="fab fa-twitter"></i></a>'+
    '<a href="https://www.linkedin.com/in/xiaoge-deng-5b1b56148/"><i class="fab fa-linkedin"></i></a>' +
    '<a href="https://medium.com/@ChileanRoseHair"><i class="fab fa-medium"></i></a>' +
    '<a href=""><i class="fab fa-codepen"></i>' +
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
  '<div class="wrapper">'+

    '<h2>Sophie</h2>'+
    '<p>Multi-page responsive website created with flexbox, SCSS and CSS grids</p>'+
    '<div class="links">'+
      '<a href="https://900apm.github.io/xiaoge_deng_project2/index.html">live link</a>'+
      '<a href="https://github.com/900apm/xiaoge_deng_project2">GitHub</a>' +
    '</div >'+

    '<h2>Shutter</h2>' +
    '<p>Single-page responsive website created with only floats</p>' +
    '<div class="links">'+
      '<a href="https://900apm.github.io/xiaoge_deng_project1/">live link</a>'+
      '<a href="https://github.com/900apm/xiaoge_deng_project1">GitHub</a>' +
    '</div >'+

    '<h2>ASCII ASTEROIDS</h2>' +
    '<p>Ascii text game created with javaScript and jQuery</p>' +
    '<div class="links">'+
      '<a href="https://900apm.github.io/ASCII-ASTEROIDS/">live link</a>'+
      '<a href="https://github.com/900apm/ASCII-ASTEROIDS">GitHub</a>' +
    '</div >'+

    '<h2>Ajax Answers</h2>' +
    '<p>Jeopardy based trivia game created with SCSS, Ajax queries and jService restful API</p>' +
    '<div class="links">'+
      '<a href="http://xiaogedeng.com/ajaxanswers/">live link</a>'+
      '<a href="https://github.com/900apm/project4_Xiaoge_Amy">GitHub</a>' +
    '</div >'+

    '<h2>No-name Notes</h2>' +
    '<p>Note taking application created with React and Firebase backend</p>' +
    '<div class="links">'+
      '<a href="https://no-name-notes.firebaseapp.com/">live link</a>'+
      '<a href="https://github.com/900apm/No-name-Notes">GitHub</a>' +
    '</div >'+

    '<h2>Piece by Peace</h2>' +
    '<p>Multi-page React application created with SCSS and Firebase backend</p>' +
    '<div class="links">'+
      '<a href="https://piece-by-peace.firebaseapp.com/">live link</a>'+
      '<a href="https://github.com/900apm/fawad_xiaoge_nova_project_6">GitHub</a>' +
    '</div >'+

  '</div >'+
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
    "<p>Hello! Welcome to my site, click any icon to begin.</p>"+
    "<p>‐ windows are able to be repositioned by dragging the striped window header</p>"+
    "<p>‐ windows are able to be resized with the arrow positioned on the bottom right</p>"+
    "<p>‐ to move a window to the front, click on the desired window's header</p>" +
    "<p>‐ buttons on the top right toggle fullscreen and close the window respectively</p>"+
    "<p>xiaoge.deng@protonmail.com</p>"+
'</div>');

function runOnStart() {
    // on start add read me window to the page

    let clickCounter = 0;
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
            width: "100%",
          });
        }
        else {
          $(".readme-window").attr("id", "left");
          $(this).parents(".readme-window").animate({
            top: "3.5%",
            right: "2%",
            height: "485",
            width: "300"
          })
        }
      });
  };
  

window.onload = runOnStart;

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
  let clickCounter = 0;
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
  let clickCounter = 0;
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
  let clickCounter = 0;
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
$(".piece").on("click", function () {
  let clickCounter = 0;
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
        minWidth: 350,
        minHeight: 600,
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
  let clickCounter = 0;
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
  let clickCounter = 0;
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
  let clickCounter = 0;
  if ($('.about-window').length === 0) {
    $("main").append(aboutHtml);
    $(".about-window")
      .draggable({
        containment: "body",
        cancel: "p, .icons",
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
  let clickCounter = 0;
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
  let clickCounter = 0;
  if ($('.portfolio-window').length === 0) {
    $("main").append(portfolioHtml);
    $(".portfolio-window")
      .draggable({
        containment: "body",
        cancel: "h2, p, a",
        start: function () {
          $('iframe').css('pointer-events', 'none');
        },
        stop: function () {
          $('iframe').css('pointer-events', 'auto');
        }
      })
      .resizable({
        containment: "body",
        minWidth: 400,
        minHeight: 550,
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
        // console.log("I am big");
        $(this).parents(".portfolio-window").animate({
          top: "0",
          left: "0",
          height: "100%",
          width: "100%"
        });
      }
      else {
        // console.log("I am small");
        $(this).parents(".portfolio-window").animate({
          top: "5%",
          left: "32.5%",
          height: "550",
          width: "400"
        });
      }
    });
});

// readme window
$(".readme").on("click", function () {
  let clickCounter = 0;
  if ($('.readme-window').length === 0) {
    $("main").append(readmeHtml);
    $(".readme-window")
      .draggable({
        containment: "body",
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
  }

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

  let time = hours + ":" + minutes + ":" + seconds + " " + dayOrNight;
  document.getElementById("time").innerText = time;
  document.getElementById("time").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();

// document ready closing tag
});