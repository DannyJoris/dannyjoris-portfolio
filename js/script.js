(function($) {
  $(document).ready(function() {
    // push footer init
    pushFooter();
    $(window).resize(function() {
      pushFooter();
    });
    
    // little active class hack
    // blog posts have 'layout: blog', but this gets overwritten because the blog
    // layout has 'layout: html' and the navigation where I check for yaml variables
    // gets included in the html layout. Suggestions, anyone? :)
    if ($('#content').hasClass('blog-post')) {
      $('a.blog-link').addClass('active');
    }
    
    // Selected work accordeon and slideshow
    $('.flexslider').flexslider({ animation: "slide"  });
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