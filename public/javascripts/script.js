
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

//Sets the background images for the parallaxes as well as the parallax effect
function parallaxGenerator() {

   	$('.home').parallax({imageSrc: '/assets/images/banners/cityview.jpg'});
   	$('.investment').parallax({imageSrc: '/assets/images/banners/invest.jpg'});
   	$('.statistics').parallax({imageSrc: '/assets/images/banners/guyoncomputer.jpg'});
   	$('.connect').parallax({imageSrc: '/assets/images/banners/people-writing.jpg'});
   	$('.about').parallax({imageSrc: '/assets/images/banners/businessman.jpg'});
   	$('.recruitment').parallax({imageSrc: '/assets/images/banners/city-skyline.jpg'});
   	$('.rush').parallax({imageSrc: '/assets/images/banners/rush.jpg'});

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
	$( '.home' ).css('padding', '395px 0');
	$( '.recruitment' ).css('padding', '395px 0');
	$( '.about' ).css('padding', '200px 0');		


	$( '.investment' ).css('padding', '200px 0');
	$( '.statistics' ).css('padding', '200px 0');
	$( '.connect' ).css('padding', '200px 0');

	$( '.rush' ).css('padding', '200px 0');
}

//Resizes parallax's padding depending on size of screen.
function mobileParallax() {
	$( '.home' ).css('padding', '150px 10px');
	$( '.recruitment' ).css('padding', '150px 10px');
	$( '.about' ).css('padding', '150px 10px');		


	$( '.investment' ).css('padding', '75px 10px');
	$( '.statistics' ).css('padding', '20px 10px');
	$( '.connect' ).css('padding', '20px 0');

	$( '.rush' ).css('padding', '75px 10px');	
}

$(document).ready(function() {

	//Enables NiceScroll
	$("html").niceScroll({cursorwidth:8});

	// Change color of parallax text to white.
	$( '.parallax' ).css('color', 'white');

	// Makes the navigation bar fixed to the top.
	$( 'nav.navbar').addClass('navbar-fixed-top');

	// Adds the necessary classes to allow the navigation
	// bar to collapse when users visit the website on a
	// mobile device.
	$( 'nav.navbar div.container-fluid div' ).eq(1)
		.addClass('collapse');
	$( 'nav.navbar div.container-fluid div' ).eq(1)
		.addClass('navbar-collapse');
	$( 'nav.navbar div.container-fluid div' ).eq(1)
		.attr('id', 'nav');

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

	} else if( $( window ).width() > 767) {

		desktopParallax();
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

// When window size changes, will call one of the
// parallax function depending on the size.
$( window ).resize(function() {

	if( $( window ).width() <= 767 ) {

		mobileParallax();

	} else desktopParallax();

});