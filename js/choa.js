
// Bootsrtaps javascript collaps
$(document).ready(function() {

	// DEPENDENCY: https://github.com/flatlogic/bootstrap-tabcollapse
	$('.content-tabs').tabCollapse();

	// initialize tab function
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});
	// Place holder for search

	$('input.search-bar').placeholder();

	//Hover effect to menus
	jQuery('ul.nav li.dropdown').hover(function() {
	  if ($(window).width() > 767) {
	   jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
	  }
	}, function() {
	 if ($(window).width() > 767) {
		 jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
		}
	});

	// Mobile page panels
	$('#content-panels .panel .panel-heading').hover(function(){
	  $(this).css({
		  'cursor': 'pointer'
	  });
	}, function(){
		$(this).removeAttr('style');
	});
	
	//For mobile panels
	$('#content-panels .panel .panel-heading').on('click', function(e){
		e.preventDefault();
		// console.log(this);
		var $panelHeading = $(this);
		var $panel        = $panelHeading.parent();

		var current       = $(this).parent().is($('.panel.active'));
		//don't know if just ading "relatedContent" without it's own VAR is the best idea. TEST! At the breakpoiont, need to make "relatedContent" display: none.
		$('.panel.active, .panel-heading.active').removeClass('active').find('.panel-body, .relatedContent').slideUp(100, function(){
		  $(this).removeAttr('style');
		});

		var $fa = $(this).find('.fa');
		if($fa.hasClass('fa-plus-circle')){
		  $fa.removeClass('fa-plus-circle').addClass('fa-minus-circle');
		} else {
		  $fa.removeClass('fa-minus-circle').addClass('fa-plus-circle');
		}

		if(current) return false;
		//don't know if just ading "relatedContent" without it's own VAR is the best idea. TEST! At the breakpoiont, need to make "relatedContent" display: none.
		$panelHeading.parent().find('.panel-body, .relatedContent').slideToggle();
		$panelHeading.toggleClass('active');
		$panel.toggleClass('active');

		var $sections = $panel.siblings();
   
		$sections.find('.fa').removeClass('fa-minus-circle');
		$sections.find('.fa').addClass('fa-plus-circle');
	});

	//FOR DEV PURPOSES: Live-sense browser size _______________________________________________________________
	//Can comment out or remove when no longer needed.

	function jqUpdateSize(){
		// Get the dimensions of the viewport
		// var width = $(window).width();
		// var height = $(window).height();
		// Get the dimensions of the browser
		var width = $(window).outerWidth(true)+15;    //15
		var height = $(window).outerHeight(true)+101; //101
		//offsets calibrate it to Mozilla 'Resize' tool. Don't know why....

		$('#jqWidth').html(width);      // Display the width
		$('#jqHeight').html(height);    // Display the height
	};

	$(document).ready(jqUpdateSize);    // When the page first loads
	$(window).resize(jqUpdateSize);     // When the browser changes size

	//html use:

	// <!-- don't leave this here. -->
	// <p class="jQWinHeightWidth">
	//   <strong>Browser dimensions:</strong>
	//   <span id="jqWidth">812</span>px X <span id="jqHeight">665</span>
	// </p>

	//______________________________________________________________________________________

	//Figure out width of all breadcrumb LIs to center them in the window

	var accum_width = 0;
	$('.bread-container ul').find('li').each(function() {
		accum_width += $(this).outerWidth()+2;
	});
	$('.bread-container ul').width(accum_width);

	// console.log('this is the total LI width: '+accum_width);

	//should be around 250px for my 3-level example.

	//______________________________________________________________________________________

	//Related content video and overlays

	//Read height of videoContainer, apply to parent vid container and overlay 
	function relatedVideoSize(){
		$(".videoContainer").each(function() {
			var videoHeight = $(this).css('height');
			$('.relatedContent .video').css('height',videoHeight);
			// console.log("Related video div are: "+videoHeight);
		});
	};

	$(document).ready(relatedVideoSize);    // When the page first loads
	$(window).resize(relatedVideoSize);     // When the browser changes size

	//______________________________________________________________________________________

	//Lightbox for videos

	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox({
			keyboard: true,
			always_show_close: true,
			loadingMessage: 'Video Loading...',
			always_show_close: false,
			allowfullscreen: true
		});
		console.log('Lightbox fired.');



		//remove parameter string from URL

		// $('.ekko-lightbox  iframe').getPathFromUrl(url) {
		// 	return url.split("?")[0];
		// };


		// function getPathFromUrl(url) {
		//   return url.split("?")[0];
		// }

		// var strippedURL = getPathFromUrl;

		// console.log('The URL: '+url.split("?")[0]);



		//var strippedURL = 0;

		// $('.ekko-lightbox iframe').this(function(url){
		// 	return url.split("?")[0];
		// });
		// console.log('This is the URL: '+ url);







/*
		var queryString = a.substring(a.indexOf('?') + 1);

		var parseQueryString = function( queryString ) {
		var params = {}, queries, temp, i, l;

		// Split into key/value pairs
		queries = queryString.split("&");

		// Convert the array of strings into an object
		for ( i = 0, l = queries.length; i < l; i++ ) {
			temp = queries[i].split('=');
			params[temp[0]] = temp[1];
		}

		return params;
		};

		console.log('This is the URL: '+params);
*/





		// $('iframe').this(function(url){
		// 	return url.split("?")[0];
		// });

		// var strippedURL = 0;

		// $("iframe").each(function(){
		// 	return url.split("?")[0];
		// });
		// console.log('This is the URL: '+strippedURL);



/*
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '500',
      width: '500',
      fs: 1
      //videoId: 'M7lc1UVf-VE'
    });
}
*/


	}); 

	//______________________________________________________________________________________


	//Another Youtube Video Test - this passes YT parameters
	//Remove js/bootstrap.youtubepopup.min.js - if we don't use it

	$(function(){
		$(".youtube").YouTubeModal({
			autoplay: 0, 
			fs: 1,
			modestbranding: 1,
			rel: 0
		});
	});

	//______________________________________________________________________________________


}); //END Page Document Ready function













