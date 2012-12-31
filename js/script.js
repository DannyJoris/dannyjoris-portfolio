(function($) {
  $(document).ready(function() {
    // push footer init
    pushFooter();
    $(window).resize(function() {
      pushFooter();
    });
  });
  
  // push footer to the bottom of the page if total content height is smaller
  // than window height.
  function pushFooter() {
    var windowHeight = $(window).innerHeight();
    var headerHeight = $("#header").height();
    var introductionHeight = $("#introduction").height();
    var mainHeight = $("#main").height();
    var footerHeight = $("#footer").height();

    if (headerHeight + introductionHeight + mainHeight + footerHeight < windowHeight) {
      $(".footer-wrapper").addClass("sticky-footer");
    }
    else {
      $(".footer-wrapper").removeClass("sticky-footer");
    }
  }
}(jQuery));