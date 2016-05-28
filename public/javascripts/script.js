
var $homeParallax = $('.home');
var $investmentParallax = $('.investment');
var $statisticsParallax = $('.statistics');
var $connectParallax = $('.connect');
var $aboutParallax = $('.about');
var $recruitmentParallax = $('.recruitment');
var $rushParallax = $('.rush');

var $nav = $('nav');
var $subnav = $( 'nav.navbar div.container-fluid div' ).eq(1)


/**

// When users scrolls down, the elements that have the class 'hideme,'
// will visibly appear if they are initially set to invisible.
function fadeIns() {

	$(window).scroll( function(){

		$('hidden').each( function(i){            
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();            
			if( bottom_of_window > bottom_of_object ){                
			    $(this).animate({'opacity':'1'},500);                    
			}           
		});   
		
	}); 

}

**/

//Sets the background images for the parallaxes as well as the parallax effect
function parallaxGenerator() {

   	$homeParallax.parallax({imageSrc:'/assets/images/banners/home.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	//$investmentParallax.parallax({imageSrc:'/assets/images/banners/invest.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	//$statisticsParallax.parallax({imageSrc:'/assets/images/banners/guyoncomputer.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	//$connectParallax.parallax({imageSrc:'/assets/images/banners/people-writing.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'fa;se'});
   	$aboutParallax.parallax({imageSrc:'/assets/images/banners/businessman.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$recruitmentParallax.parallax({imageSrc:'/assets/images/banners/recruitment.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	//$rushParallax.parallax({imageSrc:'/assets/images/banners/rush.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});

}

/**

// When users click inside the textbox, the default message will
// dissappear, when users click out of the textbox with no
// message, the default message will re-appear.
function newsletterEffect() {

	var emailField = document.getElementById("newsletter");

	emailField.onfocus = function() {
		if (emailField.value == "Enter your email here") {
			emailField.value = "";
		}
	};
	emailField.onblur = function() {
		if (emailField.value == "") {
			emailField.value = "Enter your email here";
		}
	};

}

**/

//Resizes parallax's padding depending on size of screen.
function desktopParallax() {

	$aboutParallax.css('padding', '200px 0');		
	//$investmentParallax.css('padding', '200px 0');
	//$statisticsParallax.css('padding', '200px 0');
	//$connectParallax.css('padding', '200px 0');
	//$rushParallax.css('padding', '200px 0');

}

//Resizes parallax's padding depending on size of screen.
function mobileParallax() {

	$aboutParallax.css('padding', '150px 10px');		
	//$investmentParallax.css('padding', '75px 10px');
	//$statisticsParallax.css('padding', '20px 10px');
	//$connectParallax.css('padding', '20px 10px');
	//$rushParallax.css('padding', '20px 10px');

}

// fills the home parallax's image to entire screen 
function coverParallax() {

	var padding;

	if(window.location.pathname === '/') {
		padding = ( $( window ).height() / 2 ) - ( $homeParallax.height() / 2 );
		$homeParallax.css('padding-top', padding + 'px');
		$homeParallax.css('padding-bottom', padding + 'px');
	} else if(window.location.pathname === '/recruitment') {
		padding = ( $( window ).height() / 2 ) - ( $recruitmentParallax.height() / 2 );
		$recruitmentParallax.css('padding-top', padding + 'px');
		$recruitmentParallax.css('padding-bottom', padding + 'px');
	}

}

$(document).ready(function() {

	parallaxGenerator();

	var url = window.location.pathname;

	if(url === "/") {
		$nav.css('display', 'none');
		$nav.fadeIn(1000);
		$homeParallax.css('opacity', 0);
		coverParallax();
	} else if(url === "/recruitment") coverParallax();

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
	//
	// The padding-size of parallaxs' blocks will change 
	// accordingly.
	if( $( window ).width() <= 767 ) mobileParallax(); 
	else if( $( window ).width() > 767) desktopParallax();
	
	//newsletterEffect();

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
	if( $( window ).width() <= 767 ) mobileParallax();
	else if( $( window ).width() > 767 ) desktopParallax();
	
});