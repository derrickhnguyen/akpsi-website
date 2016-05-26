
function prepareEventHandlers() {
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

$(document).ready(function() {
	
	$('#wrapper').fadeIn(1300);

	$(window).scroll( function(){
		$('.hideme').each( function(i){            
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();            
			if( bottom_of_window > bottom_of_object ){                
			    $(this).animate({'opacity':'1'},500);                    
			}           
		});   
	}); 

    $('a[href=#top]').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
    });

   	$('.home').parallax({imageSrc: '/assets/images/banners/cityview.jpg'});
   	$('.investment').parallax({imageSrc: '/assets/images/banners/invest.jpg'});
   	$('.statistics').parallax({imageSrc: '/assets/images/banners/guyoncomputer.jpg'});
   	$('.connect').parallax({imageSrc: '/assets/images/banners/people-writing.jpg'});
   	$('.about').parallax({imageSrc: '/assets/images/banners/businessman.jpg'});
   	$('.recruitment').parallax({imageSrc: '/assets/images/banners/city-skyline.jpg'});
   	$('.rush').parallax({imageSrc: '/assets/images/banners/rush.jpg'});

    prepareEventHandlers();
    
});