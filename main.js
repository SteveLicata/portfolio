window.onload = function() {


//WEB DEVELOPER PORTFOLIO header fade in
//hide CSS background
// $("#title").hide();
//display CSS background
// $("#title").show(4000);

//hide WEB text
// $("#web").hide();
//display WEB text
// $("#web").show(1000);

//hide DEVELOPER text
// $("#dev").hide();
//display DEVELOPER Text
// $("#dev").show(2000);

//hide PORTFOLIO text
// $("#folio").hide();
//display PORTFOLIO text
// $("#folio").show(3000);


//mobile navbar collapse
$(".button-collapse").sideNav();


// Scrolling Code Attribution:
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // HIDE AND DISPLAY PROJECTS

  //GAME SITES APPS BUTTONS DIV
  var buttons = document.getElementById('buttons');
  buttons.style.display = 'none';

  //SHOW ALL Button
  var showAllBtn = document.getElementById('showallbtn');
  showAllBtn.addEventListener('click', function(e){
    e.preventDefault();
    buttons.style.display = "unset";
    websitesDiv.style.display = "unset";
    gamesDiv.style.display = "unset";
    webappsDiv.style.display = 'unset';
    showAllBtn.style.display = "none";
    hideAllBtn.style.display = "unset";
  });

  // HIDE ALL Button
  var hideAllBtn = document.getElementById('hideallbtn');
  hideAllBtn.style.display = "none";

  hideAllBtn.addEventListener('click', function(e){
    e.preventDefault();
    showAllBtn.style.display = "unset";
    hideAllBtn.style.display = "none";
    buttons.style.display = "none";
    websitesDiv.style.display = "none";
    gamesDiv.style.display = "none";
    webappsDiv.style.display = 'none';
  });

  //WEBSITES div
  var websitesDiv = document.getElementById('websites');
  websitesDiv.style.display = 'none';

  var websitesBtn = document.getElementById('websitebtn');
  websitesBtn.addEventListener('click', function(e){
    e.preventDefault();
    websitesDiv.style.display = "unset";
  });

  //GAMES div
  var gamesDiv = document.getElementById('games');
  gamesDiv.style.display = 'none';

  var gamesBtn = document.getElementById('gamesbtn');
  gamesBtn.addEventListener('click', function(e){
    e.preventDefault();
    gamesDiv.style.display = "unset";
  });

  //WEBAPPS div
  var webappsDiv = document.getElementById('webapps');
  webappsDiv.style.display = 'none';

  var webappsBtn = document.getElementById('webappsbtn');
  webappsBtn.addEventListener('click', function(e){
    e.preventDefault();
    webappsDiv.style.display = 'unset';
  });


}; //end window onload
