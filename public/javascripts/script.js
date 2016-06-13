
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
		$captionArray[i] = '.text-content-' + (i + 1).toString();
	}
}

$(document).ready(function() {
	parallaxGenerator();

	var url = window.location.pathname;
	if(url === '/' || 
	   url === '/about'||
	   url === '/brothers' ||
	   url === '/recruitment') 
		coverParallax();

	if(url === '/') {
		$('.home').css('display', 'none').fadeIn(700);
		$nav.css('display', 'none').fadeIn(700);
	}

	if(url === '/brothers') {
		grabCaption($headshot.size());
		for(var i = 0; i < $headshot.size(); i++) {
			$($captionArray[i]).css('position', 'relative');
			$($captionArray[i]).css('bottom', 40 + 'px');
			$($captionArray[i]).css('opacity', 0.0);
			$($captionArray[i]).css('cursor', 'pointer');
			$($captionArray[i]).css('padding-bottom', '2px');
			$($captionArray[i]).css('color', 'white');
			$($captionArray[i]).css('text-shadow', '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000');
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

});

// initializes parallax effect
function parallaxGenerator() {
	if(window.location.pathname === '/') {
		if(window.mobilecheck()) {
			$homeParallax.parallax({imageSrc:'/assets/images/banners/home-mb.jpg', naturalWidth:'675', naturalHeight:'1100', bleed:'10', androidFix:'false', positionY:'10px'});
		} else {
			$homeParallax.parallax({imageSrc:'/assets/images/banners/home.jpg', naturalWidth:'2000', naturalHeight:'1200', bleed:'10', androidFix:'false', positionY:'10px'});
		}
	}

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
		parallaxHeader.addClass('header');
		padding = ( $( window ).height() / 2 ) - ( parallax.height() / 2 );
		if(url === '/about' || url === '/brothers') {
			parallax.css('padding-bottom', padding - ($(window).height() / 5) + 'px');
			parallax.css('padding-top', padding - ($(window).height() / 5) + 'px');					
		} else {
			parallax.css('padding-bottom', padding - ($nav.height() - 30) + 'px');	
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
});

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
