import $ from "jquery";

(function () {

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
	
	// Page loading animation
	 $(window).on('load', function() {
        $('#js-preloader').addClass('loaded').fadeOut('slow');
    });

})(window.jQuery);