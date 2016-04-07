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


});
