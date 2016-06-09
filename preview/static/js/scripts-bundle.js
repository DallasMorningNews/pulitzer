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


	// CUSTOM SHARING

	var uriLink = "http%3A%2F%2Finteractives.dallasnews.com%2F2016%2Fpulitzer";

	$(".facebook").click(function () {
		//Facebook share
		FB.ui({
			method: 'feed',
			name: storyTitle,
			link: storyURL,
			caption: '',
			picture: storyIMG,
			description: leadText
		});
	});

	$(".twitter").click(function () {
		window.open("https://www.twitter.com/intent/tweet?&hashtags=" + "&text=" + storyTitle + "&via=dallasnews&url=" + uriLink + "&image=" + storyIMG, "top=200, left=200,width=550,height=420");
	});


	// NAV

	$('#pulNav ul li').click(function() {
		var target = $(this).attr("data-link");
		console.log(target);
		var scrollTarget = $(target);
		$("#pulNav ul").removeClass("displayNav");
		$("html, body").animate({
			scrollTop: ($(target).offset().top - 70)
		}, "500");
	});

	$('.menu').click(function() {
		$("#pulNav ul").toggleClass("displayNav");
	});



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


	$("#cartoons").easyslide();



});

(function($) {

  $.fn.easyslide = function(frameObj) {

    var slideCounter = 0;

    var self = this;

    // determine total slides
    var totalSlides = self.find(".slide").length;

    var previous = self.find(".previousButton"),
        next = self.find(".nextButton");


    //update the position and display of the buttons based on image size and position within the slide show

    function slidePosition() {

        console.log('test');
      // grab the height of the current image
      var imageHeight = self.find(".current img").height();

      // divide that by 2 to set the "top" attribute of the slide buttons
      var buttonPosition = imageHeight / 2;

      // udpate those buttons' css
      self.find(".slideButton").css("top", buttonPosition + "px");

      // check where we are in the slide show and display or hide the appropriate controls
      if (slideCounter === 0 ) {
        previous.hide();
      } else if (slideCounter === (totalSlides - 1) ) {
        next.hide();
      } else {
        previous.show();
        next.show();
      }
    }


    // advancing the slideshow by moving the current slide to the right
    // then moving the next slide in from the left
    // afterward, grab the file path and assign it to the next image's src attribute
    // then check where we are in the slideshow

    function advanceSlide() {

      if (slideCounter < totalSlides - 1) {
        slideCounter ++; // advancing the counter

        //updating the current slide to become the postslide
        self.find('.current').addClass('postSlide').removeClass('current');

        //updating the next slide to become the current slide
        self.find('.slide').eq(slideCounter).addClass('current').removeClass('preSlide');

        // grab image paths for the fallback src attribute and the srcset attribute
        var defaultImage = self.find('.slide').eq(slideCounter + 1).data('default');
        var srcset = self.find('.slide').eq(slideCounter + 1).data('srcset');

        // setup the next slide in the slideshow with the proper srcset and src attributes
        self.find('.slide').eq(slideCounter + 1).children('img').attr('src', defaultImage).attr('srcset', srcset);

        //check the slide position
        slidePosition();
      }
    }

    // rewind the slideshow by moving the current slide to the left
    // then move the previous slide back into view from the left
    // then check where we are in the slideshow

    function rewindSlide() {
      if (slideCounter > 0) {
        slideCounter --;
        self.find('.current').addClass('preSlide').removeClass('current');
        self.find('.slide').eq(slideCounter).addClass('current').removeClass('postSlide');
        slidePosition();
      }
    }

    // append a number and total length of slideshow to each cutline

    $.each(self.find($(".cutline")), function(k,v) {
      var cutlinePrefix = "<strong> Slideshow - " + (k + 1) + " of " + totalSlides + ":</strong> ";
      $(this).prepend(cutlinePrefix);
    });

    //running an interval on the slidePosition initially to hide previous button
    //interval is set to run to make sure the image has loaded, then cleared
    var positionInterval = setInterval(function() {
        if (self.find(".current img").height() > 50) {
            slidePosition();
            clearInterval(positionInterval);
        }
    }, 3000);

    //binding click and swipe events to the next and previous button

    next.on('click', advanceSlide);
    previous.on('click', rewindSlide);

    // if you want to be able to swipe the slideshow on touch devices, un-note the following two lines
    // and make sure you call jquery.swipe.min.js in the index file

    self.on("swipeleft", advanceSlide);
    self.on("swiperight", rewindSlide);


    // update the position of the slide buttons if the window resizes
    $(window).resize(function() {
        setTimeout(function() {
            slidePosition();
        }, 150);
    });

  };

}(jQuery));
