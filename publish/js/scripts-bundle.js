$(document).ready(function(){function e(e){$.each($(".expandedText").children(".speakerBlock"),function(t,i){$(this).attr("data-name")===e&&($(".expandedText").children(".speakerBlock").addClass("hidden"),$(this).removeClass("hidden"))})}console.log("loaded");var t=new Date,i=t.getFullYear();$(".copyright").text(i),$(".speakerList li").click(function(){var t=$(this).children("img").attr("alt");$(this).siblings("li").removeClass("activeMug"),$(this).addClass("activeMug"),e(t)}),$("#slideContainer > div:gt(0)").hide(),setInterval(function(){$("#slideContainer > div:first").fadeOut(1e3).next().fadeIn(2e3).end().appendTo("#slideContainer")},4e3);var s=$(".dmnSlide").height();$("#slideContainer").css("height",s+20+"px"),$(window).resize(function(){setTimeout(function(){s=$(".dmnSlide").height(),$("#slideContainer").css("height",s+20+"px")},250)});var a="http%3A%2F%2Finteractives.dallasnews.com%2F2016%2Fpulitzer";$(".facebook").click(function(){FB.ui({method:"feed",name:storyTitle,link:storyURL,caption:"",picture:storyIMG,description:leadText})}),$(".twitter").click(function(){window.open("https://www.twitter.com/intent/tweet?&hashtags=&text="+storyTitle+"&via=dallasnews&url="+a+"&image="+storyIMG,"top=200, left=200,width=550,height=420")}),$("#pulNav ul li").click(function(){var e=$(this).attr("data-link");console.log(e);$(e);$("#pulNav ul").removeClass("displayNav"),$("html, body").animate({scrollTop:$(e).offset().top-70},"500")}),$(".menu").click(function(){$("#pulNav ul").toggleClass("displayNav")}),$(".dropHed").on("click",function(){function e(e){e.next(".dropText").addClass("expandedText")}if($(this).next(".dropText").hasClass("expandedText")===!1){$(".expandedText").slideToggle(200),$(".expandedText").siblings("h4").children(".fa").toggleClass("fa-plus-circle").toggleClass("fa-minus-circle"),$(this).next(".dropText").slideToggle(200),$(this).find(".fa").toggleClass("fa-plus-circle").toggleClass("fa-minus-circle");var t=$(this);setTimeout(function(){$(".expandedText").removeClass("expandedText"),e(t)},201)}else $(".expandedText").slideToggle(200),$(".expandedText").siblings("h4").children(".fa").toggleClass("fa-plus-circle").toggleClass("fa-minus-circle"),setTimeout(function(){$(".expandedText").removeClass("expandedText")},201)})});