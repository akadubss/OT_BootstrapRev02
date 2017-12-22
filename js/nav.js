var navBar = $(".navbar");
var hdrHeight = $("#myCarousel").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
    
});



