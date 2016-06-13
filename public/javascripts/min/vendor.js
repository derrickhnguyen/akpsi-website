function highlightNav(){var t;switch(window.location.pathname){case"/":t=0;break;case"/about":t=1;break;case"/brothers":t=2;break;case"/recruitment":t=3;break;case"/contact":t=4}$(".navbar-nav li a").eq(t).css("background-color","#f1f1f1")}function parallaxGenerator(){switch(window.location.pathname){case"/":window.mobilecheck()?$homeParallax.parallax({imageSrc:"/assets/images/banners/home-mb.jpg",naturalWidth:"675",naturalHeight:"1100",bleed:"10",androidFix:"false",positionY:"10px"}):$homeParallax.parallax({imageSrc:"/assets/images/banners/home.jpg",naturalWidth:"2000",naturalHeight:"1200",bleed:"10",androidFix:"false",positionY:"10px"});break;case"/about":$aboutParallax.parallax({imageSrc:"/assets/images/banners/businessman.jpg",naturalWidth:"2000",naturalHeight:"1200",bleed:"10",androidFix:"false",positionY:"10px"});break;case"/brothers":$brothersParallax.parallax({imageSrc:"/assets/images/banners/brothers.jpg",naturalWidth:"2000",naturalHeight:"1200",bleed:"10",androidFix:"false",positionY:"0.1px"});break;case"/recruitment":$recruitmentParallax.parallax({imageSrc:"/assets/images/banners/recruitment.jpg",naturalWidth:"2000",naturalHeight:"1200",bleed:"10",androidFix:"false"})}}function coverParallax(){var t,i,e;switch(window.location.pathname){case"/":i=$homeParallax,e=$homeParallaxHeader;break;case"/about":i=$aboutParallax,e=$aboutParallaxHeader;break;case"/brothers":i=$brothersParallax,e=$brothersParallaxHeader;break;case"/recruitment":i=$recruitmentParallax,e=$recruitmentParallaxHeader}$(window).width()<=767?(e.removeClass("header"),t=$(window).height()/2-i.height()/2,i.css("padding-bottom",t-20+"px"),i.css("padding-top",t+"px")):(e.addClass("header"),t=$(window).height()/2-i.height()/2,"/about"===window.location.pathname||"/brothers"===window.location.pathname?(i.css("padding-bottom",t-$(window).height()/5+"px"),i.css("padding-top",t-$(window).height()/5+"px")):(i.css("padding-bottom",t-($nav.height()-30)+"px"),i.css("padding-top",t+"px")))}function grabCaption(t){for(var i=0;t>i;i++)$captionArray[i]=".text-content-"+(i+1).toString()}function brotherImgOnHover(){if("/brothers"===window.location.pathname){grabCaption($headshot.size());for(var t=0;t<$headshot.size();t++)$($captionArray[t]).css("position","relative"),$($captionArray[t]).css("bottom","40px"),$($captionArray[t]).css("opacity",0),$($captionArray[t]).css("cursor","pointer"),$($captionArray[t]).css("padding-bottom","2px"),$($captionArray[t]).css("color","white"),$($captionArray[t]).css("text-shadow","-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"),$($captionArray[t]).addClass("black"),$($captionArray[t]).hover(function(){$(this).css("opacity",1)},function(){$(this).css("opacity",0)});$headshot.each(function(t){$(this).hover(function(){$($captionArray[t]).css("opacity",1),$(this).css("opacity",.7)},function(){$($captionArray[t]).css("opacity",0),$(this).css("opacity",1)})}),$headshot.each(function(t){$($captionArray[t]).hover(function(){$headshot.eq(t).css("opacity",.7)},function(){$headshot.eq(t).css("opacity",1)})})}}!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):t.lightbox=i(t.jQuery)}(this,function(t){function i(i){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=t.extend({},this.constructor.defaults),this.option(i)}return i.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:500,fitImagesInViewport:!0,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1},i.prototype.option=function(i){t.extend(this.options,i)},i.prototype.imageCountLabel=function(t,i){return this.options.albumLabel.replace(/%1/g,t).replace(/%2/g,i)},i.prototype.init=function(){this.enable(),this.build()},i.prototype.enable=function(){var i=this;t("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(e){return i.start(t(e.currentTarget)),!1})},i.prototype.build=function(){var i=this;t('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")),this.$lightbox=t("#lightbox"),this.$overlay=t("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return i.end(),!1}),this.$lightbox.hide().on("click",function(e){return"lightbox"===t(e.target).attr("id")&&i.end(),!1}),this.$outerContainer.on("click",function(e){return"lightbox"===t(e.target).attr("id")&&i.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===i.currentImageIndex?i.changeImage(i.album.length-1):i.changeImage(i.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return i.currentImageIndex===i.album.length-1?i.changeImage(0):i.changeImage(i.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return i.end(),!1})},i.prototype.start=function(i){function e(t){a.album.push({link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var a=this,o=t(window);o.on("resize",t.proxy(this.sizeOverlay,this)),t("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var s,n=0,r=i.attr("data-lightbox");if(r){s=t(i.prop("tagName")+'[data-lightbox="'+r+'"]');for(var h=0;h<s.length;h=++h)e(t(s[h])),s[h]===i[0]&&(n=h)}else if("lightbox"===i.attr("rel"))e(i);else{s=t(i.prop("tagName")+'[rel="'+i.attr("rel")+'"]');for(var l=0;l<s.length;l=++l)e(t(s[l])),s[l]===i[0]&&(n=l)}var d=o.scrollTop()+this.options.positionFromTop,c=o.scrollLeft();this.$lightbox.css({top:d+"px",left:c+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&t("body").addClass("lb-disable-scrolling"),this.changeImage(n)},i.prototype.changeImage=function(i){var e=this;this.disableKeyboardNav();var a=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),t(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var o=new Image;o.onload=function(){var s,n,r,h,l,d,c;a.attr("src",e.album[i].link),s=t(o),a.width(o.width),a.height(o.height),e.options.fitImagesInViewport&&(c=t(window).width(),d=t(window).height(),l=c-e.containerLeftPadding-e.containerRightPadding-20,h=d-e.containerTopPadding-e.containerBottomPadding-120,e.options.maxWidth&&e.options.maxWidth<l&&(l=e.options.maxWidth),e.options.maxHeight&&e.options.maxHeight<l&&(h=e.options.maxHeight),(o.width>l||o.height>h)&&(o.width/l>o.height/h?(r=l,n=parseInt(o.height/(o.width/r),10),a.width(r),a.height(n)):(n=h,r=parseInt(o.width/(o.height/n),10),a.width(r),a.height(n)))),e.sizeContainer(a.width(),a.height())},o.src=this.album[i].link,this.currentImageIndex=i},i.prototype.sizeOverlay=function(){this.$overlay.width(t(document).width()).height(t(document).height())},i.prototype.sizeContainer=function(t,i){function e(){a.$lightbox.find(".lb-dataContainer").width(n),a.$lightbox.find(".lb-prevLink").height(r),a.$lightbox.find(".lb-nextLink").height(r),a.showImage()}var a=this,o=this.$outerContainer.outerWidth(),s=this.$outerContainer.outerHeight(),n=t+this.containerLeftPadding+this.containerRightPadding,r=i+this.containerTopPadding+this.containerBottomPadding;o!==n||s!==r?this.$outerContainer.animate({width:n,height:r},this.options.resizeDuration,"swing",function(){e()}):e()},i.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},i.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=!!this.options.alwaysShowNavOnTouchDevices}catch(i){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},i.prototype.updateDetails=function(){var i=this;if("undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(i){void 0!==t(this).attr("target")?window.open(t(this).attr("href"),t(this).attr("target")):location.href=t(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel){var e=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(e).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return i.sizeOverlay()})},i.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var t=new Image;t.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var i=new Image;i.src=this.album[this.currentImageIndex-1].link}},i.prototype.enableKeyboardNav=function(){t(document).on("keyup.keyboard",t.proxy(this.keyboardAction,this))},i.prototype.disableKeyboardNav=function(){t(document).off(".keyboard")},i.prototype.keyboardAction=function(t){var i=27,e=37,a=39,o=t.keyCode,s=String.fromCharCode(o).toLowerCase();o===i||s.match(/x|o|c/)?this.end():"p"===s||o===e?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):"n"!==s&&o!==a||(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},i.prototype.end=function(){this.disableKeyboardNav(),t(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),t("select, object, embed").css({visibility:"visible"}),this.options.disableScrolling&&t("body").removeClass("lb-disable-scrolling")},new i}),function(t,i,e,a){function o(i,e){var s=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var n=(this.position+"").toLowerCase().match(/\S+/g)||[];if(n.length<1&&n.push("center"),1==n.length&&n.push(n[0]),"top"!=n[0]&&"bottom"!=n[0]&&"left"!=n[1]&&"right"!=n[1]||(n=[n[1],n[0]]),this.positionX!=a&&(n[0]=this.positionX.toLowerCase()),this.positionY!=a&&(n[1]=this.positionY.toLowerCase()),s.positionX=n[0],s.positionY=n[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var r=this.$element.find(">.parallax-slider"),h=!1;0==r.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=r.prependTo(this.$mirror),h=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){s.naturalHeight&&s.naturalWidth||(s.naturalHeight=this.naturalHeight||this.height||1,s.naturalWidth=this.naturalWidth||this.width||1),s.aspectRatio=s.naturalWidth/s.naturalHeight,o.isSetup||o.setup(),o.sliders.push(s),o.isFresh=!1,o.requestRender()}),h||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||r.length>0)&&this.$slider.trigger("load")}function s(a){return this.each(function(){var s=t(this),n="object"==typeof a&&a;this==i||this==e||s.is("body")?o.configure(n):s.data("px.parallax")?"object"==typeof a&&t.extend(s.data("px.parallax"),n):(n=t.extend({},s.data(),n),s.data("px.parallax",new o(this,n))),"string"==typeof a&&("destroy"==a?o.destroy(this):o[a]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],a=0;a<e.length&&!i.requestAnimationFrame;++a)i.requestAnimationFrame=i[e[a]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[a]+"CancelAnimationFrame"]||i[e[a]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var a=(new Date).getTime(),o=Math.max(0,16-(a-t)),s=i.setTimeout(function(){e(a+o)},o);return t=a+o,s}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),a=Math.max(this.boxOffsetTop+this.boxHeight-t,0),s=this.boxHeight+(e-a)*(1-this.speed)|0,n=(this.boxOffsetTop-e)*(1-this.speed)|0;if(s*this.aspectRatio>=this.boxWidth){this.imageWidth=s*this.aspectRatio|0,this.imageHeight=s,this.offsetBaseTop=n;var r=this.imageWidth-this.boxWidth;"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-r:isNaN(this.positionX)?this.offsetLeft=-r/2|0:this.offsetLeft=Math.max(this.positionX,-r)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var r=this.imageHeight-s;"top"==this.positionY?this.offsetBaseTop=n:"bottom"==this.positionY?this.offsetBaseTop=n-r:isNaN(this.positionY)?this.offsetBaseTop=n-r/2|0:this.offsetBaseTop=n+Math.max(this.positionY,-r)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,a=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=a?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var a=t(e),s=t(i),n=function(){o.winHeight=s.height(),o.winWidth=s.width(),o.docHeight=a.height(),o.docWidth=a.width()},r=function(){var t=s.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,s.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};s.on("resize.px.parallax load.px.parallax",function(){n(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){r(),o.requestRender()}),n(),r(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var a,s=t(e).data("px.parallax");for(s.$mirror.remove(),a=0;a<this.sliders.length;a+=1)this.sliders[a]==s&&this.sliders.splice(a,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var n=t.fn.parallax;t.fn.parallax=s,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=n,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);var $homeParallax=$(".home"),$homeParallaxHeader=$(".home h1"),$aboutParallax=$(".about"),$aboutParallaxHeader=$(".about h1"),$brothersParallax=$(".brothers"),$brothersParallaxHeader=$(".brothers h1"),$recruitmentParallax=$(".recruitment"),$recruitmentParallaxHeader=$(".recruitment h1"),$nav=$("nav"),$subnav=$("nav.navbar div.container-fluid div").eq(1),$headshot=$(".headshot"),$captionArray=new Array;!function(){$("a[href=#top]").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})}(),window.mobilecheck=function(){var t=!1;return function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t},$(document).ready(function(){highlightNav(),parallaxGenerator(),coverParallax(),brotherImgOnHover(),"/"===window.location.pathname&&($(".home").css("display","none").fadeIn(350),$nav.css("display","none").fadeIn(350)),$(".parallax").css("color","white"),$("nav.navbar").addClass("navbar-fixed-top"),$subnav.addClass("collapse"),$subnav.addClass("navbar-collapse"),$subnav.attr("id","nav")}),$(window).resize(function(){coverParallax()});