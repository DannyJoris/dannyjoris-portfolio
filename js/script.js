(function($) {
  $(document).ready(function() {
    // js
    $('body').removeClass('no-js').addClass('js');
    
    // push footer init
    pushFooter();
    $(window).resize(function() {
      pushFooter();
    });

    // Front graphics
    $('#front-graphics img').imagesLoaded(function() {
      $(this).animate({'opacity': '1'}, 750);
    });

    // Selected work
    var selectedWork = $('#freelance-selected-work');
    // Initialize all sliders
    $('.flexslider').each(function() {
      $(this).flexslider({ animation: "slide" });
      $(this).flexslider('pause');
    });
    // slide all viewers up
    flexsliderSlideUp(selectedWork);
    // bind click to all titles
    selectedWork.find('li.work').each(function() {
      var $this = $(this);
      var title = $this.find('.title');
      var content = $this.find('.content');
      var flexSlider = $this.find('.flexslider');
      var marker = $this.find('.marker');
      var color = marker.attr('color');
      var originalColor = marker.css('background-color');

      // title hover: marker
      title.hover(function() {
        marker.css({'background-color': color});
        title.css({'color': '#333'});
      }, function() {
        if ($this.hasClass('closed')) {
          marker.css({'background-color': originalColor});
          title.css({'color': '#555'});
        }
      });

      // title click: content
      title.click(function(e) {
        // slide all viewers up
        flexsliderSlideUp(selectedWork);
        if ($this.hasClass('closed')) {
          $this.removeClass('closed').addClass('opened');
          marker.css({'background-color': color});
          content.css({'display': 'none'});
          content.slideDown(450);
          // opacity + start
          flexSlider.css({'opacity':'0.1'});
          flexSlider.animate({'opacity':'1'});
          flexSlider.flexslider('play');
          // scroll
          flexsliderScroll(content);
        }
        e.preventDefault();
      });      
    });
  });
  
  // push footer to the bottom of the page if total content height is smaller
  // than window height.
  function pushFooter() {
    var windowHeight = $(window).innerHeight();
    var headerHeight = $("#header").outerHeight(true);
    var introductionHeight = $("#introduction").outerHeight(true);
    var mainHeight = $("#main").outerHeight(true);
    var footerHeight = $("#footer").outerHeight(true);

    if (headerHeight + introductionHeight + mainHeight + footerHeight < windowHeight) {
      $(".footer-wrapper").addClass("sticky-footer");
    }
    else {
      $(".footer-wrapper").removeClass("sticky-footer");
    }
  }
 
  // slide all viewers up
  function flexsliderSlideUp(selectedWork) {
    // slide up
    selectedWork.find('.opened').each(function() {
      var $this = $(this);
      // slideup
      $this.find('.content').slideUp(450, function() {
        $this.removeClass('opened').addClass('closed');
        $this.find('.marker').css({'background-color': '#eee'});
        $(this).css({'display': 'block'});
      });
    });
    // reset
    selectedWork.find('.opened .flexslider').each(function() {
      $(this).animate({'opacity':'0.1'}, 750, 'swing', function() {
        $(this).flexslider(0);
      });
    });
    // pause
    selectedWork.find('.flexslider').each(function() {
      $(this).flexslider('pause');
    });
  }

  // scroll to top of the page
  function flexsliderScroll(content) {
    var selectedWorkOffset = $('#freelance-selected-work').offset().top;
    var itemIndex = $('li.work').index(content.parent('.work'));
    var itemHeight = 65; // @TODO: calculate this
    $('html, body').animate({
      scrollTop: selectedWorkOffset + (itemHeight * itemIndex) - 10
    }, 450);
  }
  
}(jQuery));
