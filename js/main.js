/*

$(document).ready(function() {

	// https://github.com/Modernizr/Modernizr/issues/572
	// Similar to http://jsfiddle.net/FWeinb/etnYC/
	Modernizr.addTest('cssvhunit', function() {
	    var bool;
	    Modernizr.testStyles("#modernizr { height: 50vh; }", function(elem, rule) {   
	        var height = parseInt(window.innerHeight/2,10),
	            compStyle = parseInt((window.getComputedStyle ?
	                      getComputedStyle(elem, null) :
	                      elem.currentStyle)["height"],10);
	
	        bool= !!(compStyle == height);
	    });
	    return bool;
	});

	$(function() {
    if (!Modernizr.cssvhunit) {
        var windowH = $(window).height();
        $('.header-content').css({'height':($(window).height())+'px'});
    }
	});
	
	
	
});
*/
/*

$(window).load(function() {
  When the page has loaded
  $("body").fadeIn(2000);
});
*/

(function($) {
	$(document).ready(function() {
	
		$('.scrollBlock:first-of-type').addClass('current');
		$('.scrollBlock:first-of-type .backBtn').attr("disabled", true);
		$('.scrollBlock:last-of-type .nextBtn').attr("disabled", true);
		
		$('.nextBtn').click(function(e){
			e.preventDefault();
			var allSlides = $('.scrollBlock');
			var parentContainer = $(this).parent();
	    
	    $.scrollTo( '#top', 1000, {onAfter: function() { 
		    $(".current").fadeOut(500, function() {
		    	parentContainer.removeClass('current').hide();
		    });
		    parentContainer.next(allSlides).fadeIn(1000).addClass('current');
	    }});
	   
		});
		
		$('.backBtn').click(function(e){
			e.preventDefault();
			var allSlides = $('.scrollBlock');
			var parentContainer = $(this).parent();
			
			$.scrollTo( '#top', 1000, {onAfter: function() { 
				$(".current").fadeOut(500, function() {
		    	parentContainer.removeClass('current').hide();
		    });
				parentContainer.prev(allSlides).fadeIn(1000).addClass('current');
	    }});
	    
		});
		
	
	});
})(jQuery);