(function($) {
  $(document).ready(function() {
    // push footer init
    pushFooter();
    $(window).resize(function() {
      pushFooter();
    });


//   $("#content").load("https://gist.github.com/raw/4248293/b643eab9ac24175f0183c161d6d438251c6e6b81/index.html pre");

//   $("#content").load("http://api.jquery.com/visual/");
   //$("#content").load("/about #header");
    
    var gistId = $("#gist-code").attr('gist');
    if (gistId) {
      getGist(gistId);
    }


    // check for hash in url
    console.log(window.location, "url");

    if (window.location.pathname == "/demo/") {
      if (window.location.hash) {
        var gist = window.location.hash.substring(1);
        console.log(gist);
        $("body").html('<iframe src="http://bl.ocks.org/d/' + gist + '" id="demo" style="width: 100%; height: 100%; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: none;"></iframe>');
//        $("#demo").attr("src", "http://bl.ocks.org/d/" + gist);
        console.log("http://bl.ocks.org/d/" + gist);
      }
      else {
console.log("nope");
      }
    }
    





  });
  
  // push footer to the bottom of the page if total content height is smaller
  // than window height.
  function pushFooter() {
    var windowHeight = $(window).innerHeight();
    var mainHeight = $("#main").height();
    var headerHeight = $("#header").height();
    var footerHeight = $("#footer").height();

    if (headerHeight + mainHeight + footerHeight < windowHeight) {
      $(".footer-wrapper").addClass("sticky-footer");
    }
    else {
      $(".footer-wrapper").removeClass("sticky-footer");
    }
  }
  
  // Gist api callback
  function getGist(gistId) {
    $.ajax({
      url: 'https://api.github.com/gists/' + gistId, 
      dataType: 'jsonp',
      success: printGist 
    });
  }
  
  function printGist(gist) {
    var files = gist.data.files;
    var length = files.length,
    element = null;
    for (var i = 0; i < length; i++) {

    }
    
    
    console.log(files);
    //$("#gist-wrapper").html();
  }
  
}(jQuery));