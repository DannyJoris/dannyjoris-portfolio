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

    // Selected work
    $('.flexslider').each(function() {
      $(this).flexslider({ animation: "slide" });
    });
    var selectedWork = $('#freelance-selected-work');
    flexsliderSlideUp(selectedWork);
    selectedWork.find('.title').each(function() {
      $(this).click(function(e) {
        var content = $(this).next('.content');
        if (content.hasClass('closed')) {
        flexsliderSlideUp(selectedWork);
          content.removeClass('closed').addClass('opened');
          content.hide();
          content.slideDown(400);
          flexsliderScroll(content);
        }
        else {
          flexsliderSlideUp(selectedWork);
          e.preventDefault();
        }
      });
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
  
  function flexsliderSlideDown(selectedWork) {

    selectedWork.find('.opened').each(function() {
      flexsliderSlideUp(selectedWork);
    });
  }
  
  // slide all instances up
  function flexsliderSlideUp(selectedWork) {
    // slide up
    selectedWork.find('.opened').each(function() {
      $(this).slideUp(400, function() {
        $(this).removeClass('opened').addClass('closed');
        $(this).show();
      });
    });
    // pause and reset
    selectedWork.find('.opened .flexslider').each(function() {
//      $(this).flexslider('pause');
//      $(this).flexslider(0);
    });
  }
  
  function flexsliderScroll(content) {
    var selectedWorkOffset = $('#freelance-selected-work').offset().top;
    var itemIndex = $('li.work').index(content.parent('.work'));
    var itemHeight = 65; // @TODO: calculate this

    $('html, body').animate({
      scrollTop: selectedWorkOffset + (itemHeight * itemIndex) - 10
    }, 400);
  }
  
}(jQuery));