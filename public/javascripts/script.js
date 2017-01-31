import './parallax.js'

// function brotherImgOnHover() {
// 	var $headshot = $('.headshot');
// 	var $captionArray = new Array();
// 	for (var i = 0; i < $headshot.size(); i++) {
// 		$captionArray[i] = '.text-content-' + (i + 1).toString();
// 		$($captionArray[i]).css({
// 			'position': 'relative',
// 			'bottom': 50 + 'px',
// 			'opacity': 0.0,
// 			'cursor': 'pointer',
// 			'paddingBottom': '2px',
// 			'color': 'white',
// 			'textShadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
// 		});

// 		$($captionArray[i]).on('hover', function() {
// 			$(this).css('opacity', 1.0)
// 		}, function() {
// 			$(this).css('opacity', 0.0)
// 		});
// 	}

// 	$headshot.each(function(index) {
// 		$(this).hover(function() {
// 			$($captionArray[index]).css('opacity', 1.0);
// 			$(this).css('opacity', 0.8);
// 		}, function() {
// 			$($captionArray[index]).css('opacity', 0);
// 			$(this).css('opacity', 1.0);
// 		});
// 	});

// 	$headshot.each(function(index) {
// 		$($captionArray[index]).hover(function() {
// 			$headshot.eq(index).css('opacity', 0.8);
// 		}, function() {
// 			$headshot.eq(index).css('opacity', 1.0);
// 		})
// 	});
// }

function backToTop() {
    $('a[href=#top]').on('click', function() {
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
    });
}

function scrollToAboutSection() {
	$('a[href=#about]').on('click', function() {
		$('html, body').animate({scrollTop: $('#about').offset().top}, 'slow');
		return false;
	});
}

function setup() {
	var navLink = $(".navbar-nav li a[href=" + "'" + window.location.pathname + "'" + "]");

	if ($(window).width() >= 768) {
		if(window.location.pathname.indexOf('/brothers') > -1) {
		 	navLink = $(".navbar-nav li a[href=" + "'#'" + "]");
		 	navLink.css('border-bottom', '2px solid #3498db');
		} else {
			navLink.css('border-bottom', '2px solid #3498db');
		}

		if (window.location.pathname === '/') {
			$('.title h1').css('font-size', '72px');
			$('.parallax-window').addClass('darken');
		} else if(window.location.pathname === '/brothers') {
			$('.parallax-window').addClass('darken');
		}
	} else{
		navLink.css('border-bottom', 'initial');
		if (window.location.pathname === '/') {
			$('.title h1').css('font-size', '36px');
			$('.title h2').css('font-size', '24px');
		}
	}
}

$(function() {
	// if(window.location.pathname === '/') { 
	// 	$('.container-fluid').css('display', 'none').delay(100).fadeIn(300);
	// 	$('.container').css('display', 'none').delay(100).fadeIn(300);
	// }
	setup();
	$(window).resize(function() {
		setup();
	});
	backToTop();
	scrollToAboutSection();
});