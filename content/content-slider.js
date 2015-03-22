$(function () {
	$("#about").click(function() {
		$("#main-logo").hide();
		$("#about-page").animate({width: "50%"}, 2000);
		$("#about-page").animate({width: "0%"}, 2000);
	});
	$("#playlist").click(function() {
		$("#main-logo").hide();
		$("#playlist-page").animate({width: "50%"}, 2000);
		$("#playlist-page").animate({width: "0%"}, 2000);
	});
	$("#membership").click(function() {
		$("#main-logo").hide();
		$("#membership-page").animate({width: "50%"}, 2000);
		$("#membership-page").animate({width: "0%"}, 2000);
	});
	$("#tracks").click(function() {
		$("#main-logo").hide();
		$("#tracks-page").animate({width: "50%"}, 2000);
		$("#tracks-page").animate({width: "0%"}, 2000);
	});
/*	$("#about").click(slideContent("#about"));
	$("#playlist").click(slideContent("#playlist"));
	$("#membership").click(slideContent("#membership"));
	$("#tracks").click(slideContent("#tracks")); */
});
/*
function slideContent(content) {
	var contentToActive		= $(content);
	var contentActive			= $(".active");

	if (contentActive.length != 0) {
		contentActive.toggle(1000);
		contentActive.removeClass("active");
	};
	contentToActive.addClass("active");
	contentToActive.toggle();
	contentToActive.animate({right: "50%", left: "0"}, 3000);	
}*/


