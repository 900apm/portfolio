$(document).ready(function () {

let shutterHtml = (
'<div class="shutter-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
    '<iframe src="https://900apm.github.io/xiaoge_deng_project1/"></iframe>'+
'</div>');

let sophieHtml = (
'<div class="sophie-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
    '<iframe src="https://900apm.github.io/xiaoge_deng_project2/index.html"></iframe>'+
'</div>');

let asciiHtml = (
'<div class="ascii-window window">'+
    '<div class="top-bar">'+
        '<button class="enlarge">□</button>'+
        '<button class="close">x</button>'+
        '<h2>ascii</h2>'+
        '<div class="bar1"></div>'+
        '<div class="bar2"></div>'+
        '<div class="bar3"></div>'+
        '<div class="bar4"></div>'+
        '<div class="bar5"></div>'+
        '<div class="bar6"></div>'+
        '<div class="bar7"></div>'+
    '</div>'+
  '<iframe src="https://900apm.github.io/ASCII-ASTEROIDS"></iframe>'+
'</div>');

let pieceHtml = (
'<div class="piece-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
  '<iframe src="https://piece-by-peace.firebaseapp.com/"></iframe>'+
'</div>');

let answersHtml = (
'<div class="answers-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
  '<iframe src="http://xiaogedeng.com/ajaxanswers/"></iframe>'+
'</div>');

let notesHtml = (
'<div class="notes-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
  '<iframe src="https://no-name-notes.firebaseapp.com/"></iframe>'+
'</div>');

let aboutHtml = (
'<div class="about-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
    '<div class="wrapper">'+
      "<p> Hi! I'm Xiaoge Deng </p>"+
      "<p> Welcome to my site. I'm a front end developer currently based in Toronto who enjoys creating beautiful and unique websites.</p>"+

      "<p> Works seen on this page were created with the following skills:</p>" +

      '<div class="icon-works">' +
        '<a href="https://code.visualstudio.com/" target="_blank" ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code icon</title><path d="M24 2.5v19L18 24 0 18.5v-.561l18 1.545V0zM1 13.111L4.385 10 1 6.889l1.418-.827L5.853 8.65 12 3l3 1.456v11.088L12 17l-6.147-5.65-3.434 2.589zM7.644 10L12 13.283V6.717z"/></svg></a>'+
        '<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><i class="fab fa-html5"></i></a>' +
        '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank"><i class="fab fa-css3-alt"></i></a>' +
        '<a href="https://sass-lang.com/" target="_blank"><i class="fab fa-sass"></i></a>' +
        '<a href="https://www.iterm2.com/" target="_blank"><i class="fas fa-terminal"></i></a>' +
        '<a href="https://www.npmjs.com/" target="_blank"><i class="fab fa-npm"></i></a>' +
        '<a href="https://github.com/" target="_blank"><i class="fab fa-github-square"></i></a>'+
        '<a href="https://www.javascript.com/" target="_blank"><i class="fab fa-js"></i></a>' +
        '<a href="https://jquery.com/" target="_blank"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>jQuery icon</title><path d="M1.534 5.874c-2.123 3.05-1.86 7.017-.237 10.256.037.079.078.154.118.229.023.052.049.1.077.149.013.028.031.057.047.083.026.052.054.102.081.152l.157.265c.029.049.057.097.09.146.055.094.12.187.177.281.026.039.05.078.079.117a6.36 6.36 0 0 0 .31.444c.078.107.156.211.24.315.027.038.057.076.085.114l.221.269c.027.031.054.067.083.099.098.118.202.233.306.349 0 .002.003.004.005.007a3.13 3.13 0 0 0 .424.44c.08.082.16.164.245.244l.101.097c.111.104.222.208.339.308.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.173.133.26.2l.136.104c.093.07.192.139.287.207.035.025.07.05.106.073l.029.023.281.185.12.08c.147.094.293.183.438.271.042.021.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.233.125a.324.324 0 0 1 .056.023c.033.015.064.031.096.047.12.06.245.117.375.174.024.01.05.02.076.034.144.063.288.123.437.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.153.052.304.102.459.15.036.01.073.023.111.033.159.048.313.105.473.136 10.26 1.87 13.242-6.169 13.242-6.169-2.505 3.262-6.95 4.122-11.16 3.165-.156-.036-.312-.086-.469-.132a13.522 13.522 0 0 1-.567-.181l-.062-.024c-.136-.046-.267-.097-.4-.148a1.613 1.613 0 0 0-.11-.041c-.147-.059-.29-.12-.432-.183-.031-.01-.057-.024-.088-.036a23.41 23.41 0 0 1-.361-.17c-.037-.016-.07-.033-.106-.052-.094-.044-.188-.094-.28-.142a3.942 3.942 0 0 1-.187-.096c-.113-.06-.226-.125-.339-.187-.034-.024-.073-.044-.112-.066a15.902 15.902 0 0 1-.438-.269 2.104 2.104 0 0 1-.118-.079 6.002 6.002 0 0 1-.312-.206c-.035-.023-.067-.048-.103-.073a9.541 9.541 0 0 1-.294-.212c-.042-.034-.087-.066-.132-.1-.088-.069-.177-.135-.265-.208l-.118-.094a10.58 10.58 0 0 1-.334-.281.258.258 0 0 0-.037-.03l-.347-.316-.1-.094c-.082-.083-.166-.163-.25-.245l-.097-.1a9.07 9.07 0 0 1-.309-.323l-.015-.016c-.106-.116-.209-.234-.313-.354-.027-.031-.052-.064-.08-.097l-.226-.277a21.248 21.248 0 0 1-.34-.448C2.16 11.786 1.315 7.386 3.184 3.777"/><path d="M8.121 3.305c-1.539 2.209-1.452 5.163-.254 7.499a9.1 9.1 0 0 0 .677 1.132c.23.33.484.72.792.986.107.122.223.24.344.359l.09.09c.114.11.231.218.35.325l.015.013a9.855 9.855 0 0 0 .414.342c.034.023.063.05.096.073.14.108.281.212.427.315l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.317.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.099.054.067.033.133.068.197.102l.032.014c.135.066.273.128.408.19.034.013.063.024.092.038.111.048.224.094.335.137.05.017.097.037.144.052.102.038.209.073.31.108l.14.045c.146.045.294.104.448.129 7.92 1.313 9.754-4.787 9.754-4.787-1.651 2.376-4.846 3.508-8.251 2.624a8.03 8.03 0 0 1-.448-.13c-.048-.013-.09-.028-.136-.042-.104-.036-.211-.071-.312-.109l-.144-.054c-.112-.045-.226-.087-.335-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.417-.192l-.206-.107-.119-.06c-.092-.048-.177-.098-.265-.15a.62.62 0 0 1-.062-.034c-.106-.066-.216-.13-.317-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.427-.312-.032-.029-.063-.053-.094-.079-1.497-1.177-2.678-2.786-3.238-4.608-.59-1.894-.46-4.018.559-5.742"/><path d="M13.66 1.384c-.908 1.332-.995 2.986-.37 4.455.664 1.56 2.022 2.785 3.604 3.365.065.025.128.046.195.07l.088.027c.092.029.185.063.28.084 4.376.844 5.56-2.247 5.879-2.701-1.042 1.496-2.789 1.855-4.932 1.334a4.844 4.844 0 0 1-.516-.16 6.344 6.344 0 0 1-.617-.254 6.521 6.521 0 0 1-1.08-.66c-1.92-1.454-3.109-4.23-1.857-6.491"/></svg></a>'+
        '<a href="https://reactjs.org/" target="_blank"><i class="fab fa-react"></i></a>' +
        '<a href="https://firebase.google.com/" target="_blank"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firebase icon</title><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z"/></svg></a>'+
      '</div>' +
      
      "<p>You can find me online by clicking on any of the icons listed below.</p>"+

      '<div class="icon-social">'+
        '<a href="https://twitter.com/ChileanRoseHair" target="_blank"><i class="fab fa-twitter"></i></a>'+
        '<a href="https://www.linkedin.com/in/xiaoge-deng-5b1b56148/" target="_blank"><i class="fab fa-linkedin"></i></a>' +
        '<a href="https://medium.com/@ChileanRoseHair" target="_blank"><i class="fab fa-medium"></i></a>' +
        '<a href="https://codepen.io/chileanrosehair/" target="_blank"><i class="fab fa-codepen"></i></a>' +
        '<a href="https://github.com/900apm" target="_blank"><i class="fab fa-github"></i></a>' +
        
      '</div>'+

      '<p> You reach me by clicking the contact envelope icon or emailing me directly at xiaoge.deng@protonmail.com</p>'+

    '</div>'+
'</div>');

let contactHtml = (
'<div class="contact-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
    '<h3>lets talk</h3>'+
    '<p>xiaoge.deng@protonmail.com</p>'+
    '<form action="https://formspree.io/xiaoge.deng@protonmail.com" method="POST"">'+
      '<input type="text" placeholder="name" name="name" required>'+
      '<input type="email" placeholder="email" name="_replyto" required>'+
      '<textarea name="message" placeholder="message" required ></textarea>'+
      '<input type="submit" value="Send">'+
    '</form>'+
'</div>');

let portfolioHtml = (
'<div class="portfolio-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
  '<div class="wrapper">'+
  
    '<div class="icon-portfolio">'+
      '<i class="far fa-file-image"></i>'+
      '<p>sophie.png</p>'+
    '</div>'+

    '<p>PSD conversion of a multi-page responsive website. Created with flexbox, CSS grids, SCSS and BEM naming convention.</p>'+

    '<div class="links">'+
      '<a href="https://900apm.github.io/xiaoge_deng_project2/index.html" target="_blank">External Link</a>'+
      '<a href="https://github.com/900apm/xiaoge_deng_project2" target="_blank">GitHub</a>' +
    '</div>'+

    // '<h2>Shutter</h2>' +
    // '<p>Single-page responsive website created with only floats</p>' +
    // '<div class="links">'+
    //   '<a href="https://900apm.github.io/xiaoge_deng_project1/" target="_blank">External Link</a>'+
    //   '<a href="https://github.com/900apm/xiaoge_deng_project1" target="_blank">GitHub</a>' +
    // '</div >'+

    '<div class="icon-portfolio">'+
      '<i class="far fa-file-code"></i>'+
      '<p>ASCII.js</p>'+
    '</div>'+

    '<p>ASCII text based game created exclusively with ASCII art and HTML text. Done with javaScript, jQuery and by dynamically adding elements to the DOM.</p>' +

    "<p>Player must avoid the incoming obstacles to increase their highscore. Difficluty progresses with time. Player's are able to toggle hitboxes and colour.</p>" +

    '<div class="links">'+
      '<a href="https://900apm.github.io/ASCII-ASTEROIDS/" target="_blank" >External Link</a>'+
      '<a href="https://github.com/900apm/ASCII-ASTEROIDS" target="_blank">GitHub</a>' +
    '</div >'+

    // '<h2>Ajax Answers</h2>' +
    // '<p>Jeopardy based trivia game created with SCSS, Ajax queries and jService restful API</p>' +
    // '<div class="links">'+
    //   '<a href="http://xiaogedeng.com/ajaxanswers/" target="_blank">External Link</a>'+
    //   '<a href="https://github.com/900apm/project4_Xiaoge_Amy" target="_blank">GitHub</a>' +
    // '</div >'+

    '<div class="icon-portfolio">'+
      '<i class="far fa-sticky-note"></i>'+
      '<p>No-name</p>'+
      '<p>Notes</p>'+
    '</div>'+

    '<p>Lightweight note taking application created with SCSS, React and Firebase backend.</p>' +

    '<p>Users are able to write and removes notes as well as delete all notes.</p>' +

    '<div class="links">'+
      '<a href="https://no-name-notes.firebaseapp.com/" target="_blank">External Link</a>'+
      '<a href="https://github.com/900apm/No-name-Notes" target="_blank">GitHub</a>' +
    '</div >'+

    '<div class="icon-portfolio">'+
      '<i class="fas fa-peace"></i>'+
      '<p>Piece by</p>'+
      '<p>Peace</p>'+
    '</div>'+

    '<p>Homophone word trivia game created with React, SCSS, Regex, datamuse API and Firebase backend.</p>'+
    
    '<p>The player must match the correct word to the defintion. Difficulty is adjusted with time. Total of 10 questions.</p>' +

    '<div class="links">'+
      '<a href="https://piece-by-peace.firebaseapp.com/" target="_blank">External Link</a>'+
      '<a href="https://github.com/900apm/fawad_xiaoge_nova_project_6" target="_blank">GitHub</a>' +
    '</div >'+

  '</div >'+
'</div>');

let readmeHtml = (
'<div class="readme-window window">'+
    '<div class="top-bar">'+
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
    '</div>'+
  
  '<div class="wrapper" >' +
    "<p>Welcome to my site, click on any icon to begin.</p>"+
    "<p>‐ this website is best viewed on a desktop</p>"+
    "<p>‐ icons are able to be repositioned by dragging</p>" +
    "<p>‐ windows are able to be repositioned by dragging the striped window header</p>"+
    "<p>‐ windows are able to be resized with the arrow positioned on the bottom right</p>"+
    "<p>‐ to move a window to the front, click on the desired window's header</p>" +
    "<p>‐ buttons on the top right toggle fullscreen and close the window respectively</p>"+
    "<p>xiaoge.deng@protonmail.com</p>"+
  '</div >' +
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
          left: "12.5%",
          height: "500",
          width: "805"
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
          width: "500"
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
          width: "550"
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
        minWidth: 325,
        minHeight: 325,
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
          height: "325",
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