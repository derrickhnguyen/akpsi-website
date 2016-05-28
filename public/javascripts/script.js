var $homeParallax = $('.home');
var $investmentParallax = $('.investment');
var $statisticsParallax = $('.statistics');
var $connectParallax = $('.connect');
var $aboutParallax = $('.about');
var $recruitmentParallax = $('.recruitment');
var $rushParallax = $('.rush');
var $nav = $('nav');
var $subnav = $( 'nav.navbar div.container-fluid div' ).eq(1)


// When users scrolls down, the elements that have the class 'hideme,'
// will visibly appear if they are initially set to invisible.
function fadeIns() {

	$(window).scroll( function(){
		$('.hideme').each( function(i){            
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();            
			if( bottom_of_window > bottom_of_object ){                
			    $(this).animate({'opacity':'1'},500);                    
			}           
		});   
	}); 

}

// Fades in navigation bar
function fadeInNav() {

	$(window).scroll(function() {
		$nav.fadeIn(300);
	});

}

//Sets the background images for the parallaxes as well as the parallax effect
function parallaxGenerator() {

   	$homeParallax.parallax({imageSrc:'/assets/images/banners/cityview.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$investmentParallax.parallax({imageSrc:'/assets/images/banners/invest.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$statisticsParallax.parallax({imageSrc:'/assets/images/banners/guyoncomputer.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$connectParallax.parallax({imageSrc:'/assets/images/banners/people-writing.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10'});
   	$aboutParallax.parallax({imageSrc:'/assets/images/banners/businessman.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$recruitmentParallax.parallax({imageSrc:'/assets/images/banners/city-skyline.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});
   	$rushParallax.parallax({imageSrc:'/assets/images/banners/rush.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false'});

}

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

//Resizes parallax's padding depending on size of screen.
function desktopParallax() {
	$recruitmentParallax.css('padding', '395px 0');
	$aboutParallax.css('padding', '200px 0');		
	$investmentParallax.css('padding', '200px 0');
	$statisticsParallax.css('padding', '200px 0');
	$connectParallax.css('padding', '200px 0');
	$rushParallax.css('padding', '200px 0');
}

//Resizes parallax's padding depending on size of screen.
function mobileParallax() {
	$recruitmentParallax.css('padding', '150px 10px');
	$aboutParallax.css('padding', '150px 10px');		
	$investmentParallax.css('padding', '75px 10px');
	$statisticsParallax.css('padding', '20px 10px');
	$connectParallax.css('padding', '20px 0');
	$rushParallax.css('padding', '75px 10px');	
}

// fills the home parallax's image to entire screen 
function coverHomeParallax() {
	var padding = parseFloat( $( window ).height() ) / 2 - ( ( parseFloat( $( '.test' ).css('font-size') ) ) + ( parseFloat( $('.test1').css('font-size') ) ) );
	$homeParallax.css('padding-top', padding + 'px');
	$homeParallax.css('padding-bottom', padding + 'px');
}

// Fills the home parallax's image to entire screen of mobile device
function coverHomeParallaxMobile() {
	var padding = parseFloat( $( window ).height() ) / 2 - ( ( parseFloat( $( '.test' ).css('font-size') ) ) + ( parseFloat( $('.test1').css('font-size') ) ) );
	$homeParallax.css('padding-top', (padding - 100) + 'px');
	$homeParallax.css('padding-bottom', (padding) + 'px');
}

$(document).ready(function() {

	var url = window.location.pathname;

	if(url === "/") {
		$( 'nav' ).css('display', 'none');
		$homeParallax.css('display', 'none');

		fadeInNav();
		$homeParallax.fadeIn(1000);

	}

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

	// When in mobile-view, all elements with class 'hideme'
	// will be set to visible and the padding-size of 
	// parallaxs' block will change accordingly.
	//
	//
	// When in desktop-view, all all elements with class 
	// 'hideme' will initially be set to invisible and call
	// the function, fadeIns. The padding-size of parallaxs'
	// blocks will change accordingly.
	if( $( window ).width() <= 767 ) {

		$( '.hideme' ).css('opacity', '1');
		mobileParallax();
		coverHomeParallaxMobile();

	} else if( $( window ).width() > 767) {

		desktopParallax();
		coverHomeParallax();
		$( '.hideme' ).css('opacity', '0');
		fadeIns();

	}

	parallaxGenerator();
	newsletterEffect();

});

// Smoothly move to the top of the page.
(function backToTop() {

    $('a[href=#top]').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
    });

}());

$( window ).resize(function() {

	if( $( window ).width() <= 767 ) {
		mobileParallax();
		coverHomeParallaxMobile();
	} else if( $( window ).width() > 767 ) {
		desktopParallax();
		coverHomeParallax();
	} 
	
});