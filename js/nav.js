var navBar = $(".navbar");
var hdrHeight = $(".carousel-fullscreen").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
    
});



