
var $homeParallax = $('.home');
var $investmentParallax = $('.investment');
var $statisticsParallax = $('.statistics');
var $connectParallax = $('.connect');
var $aboutParallax = $('.about');
var $recruitmentParallax = $('.recruitment');
var $rushParallax = $('.rush');

var $nav = $('nav');
var $subnav = $( 'nav.navbar div.container-fluid div' ).eq(1)

//Sets the background images for the parallaxes as well as the parallax effect
function parallaxGenerator() {

   	$homeParallax.parallax({imageSrc:'/assets/images/banners/home.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$aboutParallax.parallax({imageSrc:'/assets/images/banners/businessman.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$recruitmentParallax.parallax({imageSrc:'/assets/images/banners/recruitment.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});

}

//Resizes parallax's padding depending on size of screen.
function desktopParallax() {

	$aboutParallax.css('padding', '200px 0');

}

//Resizes parallax's padding depending on size of screen.
function mobileParallax() {

	$aboutParallax.css('padding', '150px 10px');

}

// fills the home parallax's image to entire screen 
function coverParallax() {

	var padding;

	if(window.location.pathname === '/') {
		padding = ( $( window ).height() / 2 ) - ( $homeParallax.height() / 2 );
		$homeParallax.css('padding-top', padding + 'px');

		if( $( window ).width() <= 767 ) {
			$homeParallax.css('padding-bottom', padding - 20 + 'px');
		} else $homeParallax.css('padding-bottom', padding - ( $nav.height() ) + 'px');

		$homeParallax.css('padding-bottom', padding - ( $nav.height() ) + 'px');
	} else if(window.location.pathname === '/recruitment') {
		padding = ( $( window ).height() / 2 ) - ( $recruitmentParallax.height() / 2 );
		$recruitmentParallax.css('padding-top', padding + 'px');

		if( $( window ).width() <= 767 ) {
			$recruitmentParallax.css('padding-bottom', padding - 20 + 'px');
		} else $recruitmentParallax.css('padding-bottom', padding - ( $nav.height() ) + 'px');

	} 

}

$(document).ready(function() {

	parallaxGenerator();

	var url = window.location.pathname;
	if(url === "/" || url === "/recruitment") coverParallax();

	//Enables NiceScroll
	$("html").niceScroll({cursorwidth:'8'});

	// Change color of parallax text to white.
	$( '.parallax' ).css('color', 'white');

	// Makes the navigation bar fixed to the top.
	$( 'nav.navbar').addClass('navbar-fixed-top');

	// Adds the necessary classes to allow the navigation
	// bar to collapse when users visit the website on a
	// mobile device.
	$subnav.addClass('collapse');
	$subnav.addClass('navbar-collapse');
	$subnav.attr('id', 'nav');

	// The padding-size of parallaxs' block will change 
	// accordingly.
	if( $( window ).width() <= 767 ) {
		mobileParallax();
		if(window.location.pathname === '/about') {
			$('.main div:eq(1) div:eq(1)').removeClass('top-space');
		}
	} else if( $( window ).width() > 767) desktopParallax();

});

// Smoothly move to the top of the page.
(function backToTop() {

    $('a[href=#top]').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
    });

}());

$( window ).resize(function() {

	if(window.location.pathname === '/' || window.location.pathname === '/recruitment') coverParallax();
	if( $( window ).width() <= 767 ) { 
		mobileParallax();
		$('.main div:eq(1) div:eq(1)').removeClass('top-space');
	}
	else if( $( window ).width() > 767 ) {
		desktopParallax();
		$('.main div:eq(1) div:eq(1)').addClass('top-space');
	} 
	
});