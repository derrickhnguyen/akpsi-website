
var $homeParallax = $('.home');
var $homeParallaxHeader = $('.home h1');

var $aboutParallax = $('.about');
var $aboutParallaxHeader = $('.about h1');

var $brothersParallax = $('.brothers');
var $brothersParallaxHeader = $('.brothers h1');

var $recruitmentParallax = $('.recruitment');
var $recruitmentParallaxHeader = $('.recruitment h1');

var $nav = $('nav');
var $subnav = $( 'nav.navbar div.container-fluid div' ).eq(1)

var $headshot = $('.headshot');
var $captionArray = new Array();

function grabCaption(num) {
	for(var i = 0; i < num; i++) {
		$captionArray[i] = '.text-content-' + (i+ 1).toString();
	}
}

$(document).ready(function() {
	parallaxGenerator();

	var url = window.location.pathname;
	if(url === '/' || 
	   url === '/recruitment' ||
	   url === '/brothers' ||
	   url === '/about') 
		coverParallax();

	if(url === '/brothers') {
		grabCaption($headshot.size());
		for(var i = 0; i < $headshot.size(); i++) {
			$($captionArray[i]).css('position', 'relative');
			$($captionArray[i]).css('bottom', 100 + 'px');
			$($captionArray[i]).css('opacity', 0.0);
			$($captionArray[i]).css('cursor', 'pointer');
			$($captionArray[i]).css('padding-bottom', '2px');
			$($captionArray[i]).css('color', 'white');
			$($captionArray[i] ).css('text-shadow', '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000');
			$($captionArray[i]).addClass('black');
			$($captionArray[i]).hover(function() {
				$(this).css('opacity', 1.0)
			}, function() {
				$(this).css('opacity', 0.0)
			});
		}

		$headshot.each(function(index) {
			$(this).hover(function() {
				$($captionArray[index]).css('opacity', 1.0);
				$(this).css('opacity', 0.7);
			}, function() {
				$($captionArray[index]).css('opacity', 0);
				$(this).css('opacity', 1.0);
			});
		});

		$headshot.each(function(index) {
			$($captionArray[index]).hover(function() {
				$headshot.eq(index).css('opacity', 0.7);
			}, function() {
				$headshot.eq(index).css('opacity', 1.0);
			})
		});
	}

	//Enables NiceScroll
	//$('html').niceScroll({cursorwidth:'8'});

	// Change color of parallax text to white.
	$('.parallax').css('color', 'white');

	// Makes the navigation bar fixed to the top.
	$('nav.navbar').addClass('navbar-fixed-top');

	// Adds the necessary classes to allow the navigation
	// bar to collapse when users visit the website on a
	// mobile device.
	$subnav.addClass('collapse');
	$subnav.addClass('navbar-collapse');
	$subnav.attr('id', 'nav');

	if( $( window ).width() <= 767 ) {
		if(window.location.pathname === '/about')
			$('.main div:eq(1) div:eq(1)').removeClass('top-space');
	}
});

// initializes parallax effect
function parallaxGenerator() {
   	$homeParallax.parallax({imageSrc:'/assets/images/banners/home.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false', positionY:'10px'});
   	$aboutParallax.parallax({imageSrc:'/assets/images/banners/businessman.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false', positionY:'10px'});
   	$brothersParallax.parallax({imageSrc:'/assets/images/banners/brothers.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false', positionY:'0.1px'});
   	$recruitmentParallax.parallax({imageSrc:'/assets/images/banners/recruitment.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
}

function coverParallax() {
	var padding;
	var parallax;
	var parallaxHeader;
	var parallaxSubheader;
	var url = window.location.pathname;

	if(url === '/') {
		parallax = $homeParallax;
		parallaxHeader = $homeParallaxHeader;
	} else if(url === '/about') {
		parallax = $aboutParallax;
		parallaxHeader = $aboutParallaxHeader;
	} else if(url === '/brothers') {
		parallax = $brothersParallax;
		parallaxHeader = $brothersParallaxHeader;
	} else if(url === '/recruitment') {
		parallax = $recruitmentParallax;
		parallaxHeader = $recruitmentParallaxHeader;
	}

	if($( window ).width() <= 767) {
		parallaxHeader.removeClass('header');
		padding = ($( window ).height() / 2) - (parallax.height() / 2);
		parallax.css('padding-bottom', padding - 20 + 'px');
		parallax.css('padding-top', padding + 'px');
	} else {
		if(url === '/about' || url === '/brothers') {
			parallaxHeader.addClass('header');
			padding = ( $( window ).height() / 2 ) - ( parallax.height() / 2 );
			parallax.css('padding-bottom', padding - ($(window).height()/5) + 'px');
			parallax.css('padding-top', padding - ($(window).height()/5) + 'px');					
		} else {
			parallaxHeader.addClass('header');
			padding = ( $( window ).height() / 2 ) - ( parallax.height() / 2 );
			parallax.css('padding-bottom', padding - ( $nav.height() - 30 ) + 'px');	
			parallax.css('padding-top', padding + 'px');			
		}
	
	}
}

// Smoothly move to the top of the page.
(function backToTop() {
    $('a[href=#top]').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
    });
}());

$( window ).resize(function() {
	if(window.location.pathname === '/' 
		|| window.location.pathname === '/recruitment'
		|| window.location.pathname === '/brothers'
		|| window.location.pathname === '/about')	
		coverParallax();
	
	if( $( window ).width() <= 767 ) { 
		$('.main div:eq(1) div:eq(1)').removeClass('top-space');
	} else if( $( window ).width() > 767 ) {
		$('.main div:eq(1) div:eq(1)').addClass('top-space');
	} 	
});
