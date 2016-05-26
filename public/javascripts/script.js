
// Fade in all the elements that have a class of 'hideme' when the user scrolls down.
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


// Initiates the 'back to top' button
(function backToTop() {
    $('a[href=#top]').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
    });
}());


//Creates the background images for the parallaxes as well as the parallax effect
function parallaxGenerator() {
   	$('.home').parallax({imageSrc: '/assets/images/banners/cityview.jpg'});
   	$('.investment').parallax({imageSrc: '/assets/images/banners/invest.jpg'});
   	$('.statistics').parallax({imageSrc: '/assets/images/banners/guyoncomputer.jpg'});
   	$('.connect').parallax({imageSrc: '/assets/images/banners/people-writing.jpg'});
   	$('.about').parallax({imageSrc: '/assets/images/banners/businessman.jpg'});
   	$('.recruitment').parallax({imageSrc: '/assets/images/banners/city-skyline.jpg'});
   	$('.rush').parallax({imageSrc: '/assets/images/banners/rush.jpg'});
}


// When user clicks inside the textbox, the default message will
// dissappear, when the users clicks out of the textbox with no
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


// Decreases the padding sizes of the main parallaxes
(function decreaseMainParallaxPadding() {

	if( $( window ).width() <= 667 ) {
		$( '.home' ).css('padding', '250px 10px');
		$( '.recruitment' ).css('padding', '250px 10px');
		$( '.about' ).css('padding', '250px 10px');		
	}

}()); 


$(document).ready(function() {
	fadeIns();
	parallaxGenerator();
	newsletterEffect();
});