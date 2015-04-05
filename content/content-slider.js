// TODO flesh out helper function

$(function () {
	$("#about").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({right: "0", left: "50%" }, 2000) 
		$(".active").removeClass("active");
		};
		$("#about-page").fadeIn();
		$("#about-page").animate({left: "0%", right: "50"}, 2000);
		$("#about-page").addClass("active");
	});
	
	$("#playlist").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({right: "0", left: "50%"}, 2000) 
		$(".active").removeClass("active");
		};
		$("#playlist-page").fadeIn();	
		$("#playlist-page").animate({left: "0%", right: "50%"}, 2000);
		$("#playlist-page").addClass("active");
	});
	
	$("#membership").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		};
		$("membership-page").fadeIn();
		$("#membership-page").animate({left: "0%", right: "50%"}, 2000);
		$("#membership-page").addClass("active");
	});

	$("#tracks").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		};
		$("tracks-page").fadeIn();
		$("#about-page").animate({left: "0%", right: "50%"}, 2000);
		$("#about-page").addClass("active");
	});
});

