/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;(function ($, window, document, undefined) {

  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  })();

  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX != undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY != undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position = this.positionX + (isNaN(this.positionX) ? '' : 'px') + ' ' + this.positionY + (isNaN(this.positionY) ? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo('body');

    var slider = this.$element.find('>.parallax-slider');
    var sliderExisted = false;

    if (slider.length == 0) this.$slider = $('<img />').prependTo(this.$mirror);else {
      this.$slider = slider.prependTo(this.$mirror);
      sliderExisted = true;
    }

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function () {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth = this.naturalWidth || this.width || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted) this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
      this.$slider.trigger('load');
    }
  };

  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed: 0.2,
    bleed: 0,
    zIndex: -100,
    iosFix: true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,

    refresh: function refresh() {
      this.boxWidth = this.$element.outerWidth();
      this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        var margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = -margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, -margin);
        } else {
          this.offsetLeft = -margin / 2 | 0;
        }
      } else {
        this.imageWidth = this.boxWidth;
        this.imageHeight = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft = 0;

        var margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, -margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function render() {
      var scrollTop = Parallax.scrollTop;
      var scrollLeft = Parallax.scrollLeft;
      var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
        this.visibility = 'visible';
        this.mirrorTop = this.boxOffsetTop - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = 'hidden';
      }

      this.$mirror.css({
        transform: 'translate3d(0px, 0px, 0px)',
        visibility: this.visibility,
        top: this.mirrorTop - overScroll,
        left: this.mirrorLeft,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d(0px, 0px, 0px)',
        position: 'absolute',
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });

  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: false,
    isFresh: false,
    isBusy: false,

    setup: function setup() {
      if (this.isReady) return;

      var $doc = $(document),
          $win = $(window);

      var loadDimensions = function loadDimensions() {
        Parallax.winHeight = $win.height();
        Parallax.winWidth = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth = $doc.width();
      };

      var loadScrollPosition = function loadScrollPosition() {
        var winScrollTop = $win.scrollTop();
        var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
        Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
        Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
        Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
      };

      $win.on('resize.px.parallax load.px.parallax', function () {
        loadDimensions();
        Parallax.isFresh = false;
        Parallax.requestRender();
      }).on('scroll.px.parallax load.px.parallax', function () {
        loadScrollPosition();
        Parallax.requestRender();
      });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;
    },

    configure: function configure(options) {
      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function refresh() {
      $.each(this.sliders, function () {
        this.refresh();
      });
      this.isFresh = true;
    },

    render: function render() {
      this.isFresh || this.refresh();
      $.each(this.sliders, function () {
        this.render();
      });
    },

    requestRender: function requestRender() {
      var self = this;

      if (!this.isBusy) {
        this.isBusy = true;
        window.requestAnimationFrame(function () {
          self.render();
          self.isBusy = false;
        });
      }
    },
    destroy: function destroy(el) {
      var i,
          parallaxElement = $(el).data('px.parallax');
      parallaxElement.$mirror.remove();
      for (i = 0; i < this.sliders.length; i += 1) {
        if (this.sliders[i] == parallaxElement) {
          this.sliders.splice(i, 1);
        }
      }
      $(el).data('px.parallax', false);
      if (this.sliders.length === 0) {
        $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
        this.isReady = false;
        Parallax.isSetup = false;
      }
    }
  });

  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      } else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      } else if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object') {
        $.extend($this.data('px.parallax'), options);
      }
      if (typeof option == 'string') {
        if (option == 'destroy') {
          Parallax['destroy'](this);
        } else {
          Parallax[option]();
        }
      }
    });
  };

  var old = $.fn.parallax;

  $.fn.parallax = Plugin;
  $.fn.parallax.Constructor = Parallax;

  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };

  // Parallax Data-API

  $(document).on('ready.px.parallax.data-api', function () {
    $('[data-parallax="scroll"]').parallax();
  });
})(jQuery, window, document);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

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
	$('a[href=#top]').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function scrollToAboutSection() {
	$('a[href=#about]').on('click', function () {
		$('html, body').animate({ scrollTop: $('#about').offset().top }, 'slow');
		return false;
	});
}

function setup() {
	var navLink = $(".navbar-nav li a[href=" + "'" + window.location.pathname + "'" + "]");

	if ($(window).width() >= 768) {
		if (window.location.pathname.indexOf('/brothers') > -1) {
			navLink = $(".navbar-nav li a[href=" + "'#'" + "]");
			navLink.css('border-bottom', '2px solid #3498db');
		} else {
			navLink.css('border-bottom', '2px solid #3498db');
		}

		if (window.location.pathname === '/') {
			$('.title h1').css('font-size', '72px');
			$('.parallax-window').addClass('darken');
		} else if (window.location.pathname === '/brothers') {
			$('.parallax-window').addClass('darken');
		}
	} else {
		navLink.css('border-bottom', 'initial');
		if (window.location.pathname === '/') {
			$('.title h1').css('font-size', '36px');
			$('.title h2').css('font-size', '24px');
		}
	}
}

$(function () {
	// if(window.location.pathname === '/') { 
	// 	$('.container-fluid').css('display', 'none').delay(100).fadeIn(300);
	// 	$('.container').css('display', 'none').delay(100).fadeIn(300);
	// }
	setup();
	$(window).resize(function () {
		setup();
	});
	backToTop();
	scrollToAboutSection();
});

/***/ })
/******/ ]);