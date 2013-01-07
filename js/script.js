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
    var selectedWork = $('#freelance-selected-work');
    selectedWork.find('.title').each(function() {
      $(this).click(function() {
        var content = $(this).next('.content');
        if (content.hasClass('closed')) {
        console.log('close all opened')
        flexsliderSlideUp(selectedWork);
          content.removeClass('closed').addClass('opened');
          content.slideDown(500);
          flexsliderScroll(content);
        }
        else {
          flexsliderSlideUp(selectedWork);
          return;
        }

        var flexslider = content.find('.flexslider');
        // clicked for the first time
        if (!content.hasClass('flexslider-processed')) {
          var images = content.find('img');          
          images.each(function() {
            // move from path to src attribute. sort of a lazy load.
            var url = $(this).attr('path');
            $(this).attr('src', url);
          });
          // initialize flexslider
          // move: 1 doesn't seem to be working?
          content.find('.flexslider').flexslider({ animation: "slide" });

          content.addClass('flexslider-processed');
        }
        else {

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
      $(this).slideUp(500);
      $(this).removeClass('opened').addClass('closed');
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
    }, 500);
  }
  
}(jQuery));