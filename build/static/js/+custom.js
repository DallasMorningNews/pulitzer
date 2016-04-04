$(document).ready(function() {
	console.log("loaded");
	//custom scripting goes here

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	function updateBio(bioName) {
		$.each($(".expandedText").children(".speakerBlock"), function(k, v) {
			if ( $(this).attr("data-name") === bioName ) {
				$(".expandedText").children(".speakerBlock").addClass("hidden");
				$(this).removeClass("hidden");
			}
		});
	}

	$(".speakerList li").click(function() {
		var targetBio = $(this).children("img").attr("alt");

		$(this).siblings('li').removeClass("activeMug");
		$(this).addClass("activeMug");

		updateBio(targetBio);
	});


	// AUTOPLAY SLIDESHOW

	$("#slideContainer > div:gt(0)").hide();

setInterval(function() { 
  $('#slideContainer > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideContainer');
},  4000);

var imageHeight = $(".dmnSlide").height();

$("#slideContainer").css("height",(imageHeight + 20 + "px"));

$(window).resize(function(){
	setTimeout(function(){
		imageHeight = $(".dmnSlide").height();

		$("#slideContainer").css("height",(imageHeight + 20 + "px"));
	}, 250);
});

	// function rotateBios() {
	// 	var activeList = $(".expandedText").children(".speakerList");
	// 	var listLength = activeList.children('li').length;
	// 	var activeBio = activeList.children('.speakerList li').children('img').attr('data-name');
	// 	var i = 0;
	//
	// 	function updateMugs() {
	// 		if (i < listLength -1) {
	// 			activeList.children('.speakerList li').children('img').eq(i).removeClass("activeMug");
	// 			i++;
	// 			activeList.children('.speakerList li ').children('img').eq(i).addClass("activeMug");
	// 		} else if (i >= listLength -1) {
	// 			activeList.children('.speakerList li').children('img').eq(i).removeClass("activeMug");
	// 			i = 0;
	// 			activeList.children('.speakerList li ').children('img').eq(i).addClass("activeMug");
	// 		}
	//
	// 		activeBio = activeList.children('.speakerList li').children('.activeMug').attr('data-name');
	// 		updateBio(activeBio);
	// 	}
	//
	//
	//
	// 	function rotateMugs() {
	// 		setTimeout(function() {
	// 			updateMugs();
	// 			rotateMugs();
	// 		}, 5000);
	// 	}
	//
	// 	rotateMugs();
	// }

	//rotateBios();




	/*
	------------------------------------------------------------------------------------------
	CODE FOR SLIDESHOWS, UN-COMMENT THE TWO LINES ABOVE AND BELOW THE CODE AS INSTRUCTED TO USE
	------------------------------------------------------------------------------------------
	*/

	/* DELETE THIS ENTIRE LINE

	//setting up variables for the slideshow

	var slideCounter = 0,
		$nextButton = $('.nextButton'),
		$previousButton = $('.previousButton'),
		$slideButton = $('.slideButton');
		$slideCutline = $('.slide .cutline'),
		totalSlides = $('.slide').length,
		$slideshow = $('.slideshow'),
		slideHeight = $('.slide img').height();

	// checks which image we're on in the slideshow
	// if it's the first, hide the previous button
	// if it's the last, hide the next button
	// else show the previous and last buttons

	function slidePosition() {
		if (slideCounter === 0) {
			$previousButton.hide();
		} else if ( slideCounter === (totalSlides - 1) ) {
			$nextButton.hide();
		} else {
			$previousButton.show();
			$nextButton.show();
		}
	}

	// advancing the slideshow by moving the current slide to the right
	// then moving the next slide in from the left
	// afterward, grab the file path and assign it to the next image's src attribute
	// then check where we are in the slideshow

	function advanceSlide() {
		slideCounter ++;
		$(this).siblings('.current').addClass('postSlide').removeClass('current');
		$(this).siblings('.slide').eq(slideCounter).addClass('current').removeClass('preSlide');
		var defaultImage = $(this).siblings('.slide').eq(slideCounter + 1).data('default');
		var srcset = $(this).siblings('.slide').eq(slideCounter + 1).data('srcset');
		$(this).siblings('.slide').eq(slideCounter + 1).children('img').attr('src', defaultImage).attr('srcset', srcset);;
		slidePosition();
	}

	function swipeAdvance() {

		if (slideCounter < totalSlides -1 ) {
			slideCounter ++;
			$(this).children('.current').addClass('postSlide').removeClass('current');
			$(this).children('.slide').eq(slideCounter).addClass('current').removeClass('preSlide');
			var defaultImage = $(this).children('.slide').eq(slideCounter + 1).data('default');
			var srcset = $(this).children('.slide').eq(slideCounter + 1).data('srcset');
			$(this).children('.slide').eq(slideCounter + 1).children('img').attr('src', defaultImage).attr('srcset', srcset);;
			slidePosition();
		}

	}

	// rewind the slideshow by moving the current slide to the left
	// then move the previous slide back into view from the left
	// then check where we are in the slideshow

	function rewindSlide() {
		slideCounter --;
		$(this).siblings('.current').addClass('preSlide').removeClass('current');
		$(this).siblings('.slide').eq(slideCounter).addClass('current').removeClass('postSlide');
		slidePosition();
	}

	function swipeRewind() {
		if (slideCounter > 0 ) {
			slideCounter --;
			$(this).children('.current').addClass('preSlide').removeClass('current');
			$(this).children('.slide').eq(slideCounter).addClass('current').removeClass('postSlide');
			slidePosition();
		}
	}

	// append a number and total length of slideshow to each cutline

	$slideCutline.each(function(k,v) {
		var cutlinePrefix = "<strong> Slideshow — " + (k + 1) + " of " + totalSlides + ":</strong> ";
		$(this).prepend(cutlinePrefix);
	})

	//running the slidePosition initially to hide previous button
	slidePosition();

	//setting the slideshow button position to be halfway down the slideshow
	console.log (slideHeight);
	$slideButton.css('top', ( (slideHeight / 2) - ($slideButton.height() / 2) ) )

	//binding click and swipe events to the next and previous button

	$nextButton.on('click', advanceSlide);
	$previousButton.on('click', rewindSlide);

	// if you want to be able to swipe the slideshow on touch devices, un-note the following two lines
	// and make sure you call jquery.swipe.min.js in the index file

	$slideshow.on("swipeleft", swipeAdvance);
	$slideshow.on("swiperight", swipeRewind);

	DELETE THIS ENTIRE LINE */






	/*
	------------------------------------------------------------------------------------------
	CODE FOR DROP BULLETS, UN-COMMENT THE TWO LINES ABOVE AND BELOW THE CODE AS INSTRUCTED TO USE
	------------------------------------------------------------------------------------------
	*/



	$(".dropHed").on('click', function(){

		// function that marks the new dropText block as expanded
		function markExpanded(thisObj) {
			thisObj.next(".dropText").addClass("expandedText");
		}

		// if we're clicking on a block that's not currently expanded ...
		if ( $(this).next(".dropText").hasClass("expandedText") === false ) {

			// close the currently expanded block
			$('.expandedText').slideToggle(200);

			// toggle the previously expanded plus/minus icon
			$(".expandedText").siblings('h4').children('.fa').toggleClass('fa-plus-circle').toggleClass("fa-minus-circle");

			// expand the block clicked on
			$(this).next(".dropText").slideToggle(200);

			// toggle the new expanded block's plus/minus icon
			$(this).find(".fa").toggleClass('fa-plus-circle').toggleClass('fa-minus-circle');

			// set a variable to the clicked on object
			var target = $(this);

			// run a function after everything slidetoggles at 201 milliseconds
			setTimeout(function() {
				// remove the expandedText class from the old expandedText block
				$('.expandedText').removeClass("expandedText");
				// run the function to add expandedText class to the target object's dropText sibling (see above markExpanded function)
				markExpanded(target);
			}, 201);
		} else { // if we're clicking on a block that's already expanded, just close it down, toggle the icons, and remove the expandedText class
			$('.expandedText').slideToggle(200);
			$(".expandedText").siblings('h4').children('.fa').toggleClass('fa-plus-circle').toggleClass("fa-minus-circle");
			setTimeout(function() {
					$('.expandedText').removeClass("expandedText");
			}, 201);
		}
	});










	/*
	------------------------------------------------------------------------------------------
	CODE FOR SYNOPSIS BLOCK, UN-COMMENT THE TWO LINES ABOVE AND BELOW THE CODE AS INSTRUCTED TO USE
	------------------------------------------------------------------------------------------
	*/

	/* DELETE THIS ENTIRE LINE

	$(".synopsis p").on("click", function() {
		var shareURL = "&url=" + encodeURIComponent(window.location.href),
			shareText = $(this).text(),
			twitterTag = "dallasnews";

		var maxLength = 97 // maximum number of characters to extract

		var trimmedText = shareText.substr(0, maxLength);

		trimmedText = trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")))

		trimmedText = trimmedText.slice(1);

		trimmedText += " ... "

		trimmedText = encodeURIComponent(trimmedText);

		var shareLink = "http://twitter.com/intent/tweet?text=" + trimmedText + shareURL + "&via=" + twitterTag;
		window.open(shareLink, "_blank");
	})

	DELETE THIS ENTIRE LINE */




	/*
	------------------------------------------------------------------------------------------
	NDN VIDEO ASPECT RESIZER, UN-COMMENT THE TWO LINES ABOVE AND BELOW THE CODE AS INSTRUCTED TO USE
	------------------------------------------------------------------------------------------
	*/

	/* DELETE THIS ENTIRE LINE

	//caching a pointer to the jquery element

	var $videoWrapper = ''

	if ($('.ndn_embed')) {
		$videoWrapper = $('.ndn_embed');
		scaleVideo();
	}

		function scaleVideo() {

			videoWidth = $videoWrapper.width(); //grabs the width of the video player
			videoHeight = videoWidth * .5625; //sets a variable equal to 56.25% of the width (the correct aspect ratio for the videos)

			$videoWrapper.css('height', videoHeight); //assings that height variable as the player's height in the css
		}


	$(window).resize(function() {
		scaleVideo(); //runs the video aspect resizer when the width of the browser is changed
	})

	DELETE THIS ENTIRE LINE */


});
