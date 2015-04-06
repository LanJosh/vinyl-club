// TODO flesh out helper function

$(function () {
	$("#about").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({right: "0", left: "50%" }, 1500) 
		$(".active").removeClass("active");
		};
		$("#about-page").fadeIn();
		$("#about-page").animate({left: "0%", right: "50"}, 1500);
		$("#about-page").addClass("active");
	});
	
	$("#playlist").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({right: "0", left: "50%"}, 1500) 
		$(".active").removeClass("active");
		};
		$("#playlist-page").fadeIn();	
		$("#playlist-page").animate({left: "0%", right: "50%"}, 1500);
		$("#playlist-page").addClass("active");
	});
	
	$("#membership").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({right: "0", left: "50%"}, 1500) 
		$(".active").removeClass("active");
		};
		$("#membership-page").fadeIn();
		$("#membership-page").animate({left: "0%", right: "50%"}, 1500);
		$("#membership-page").addClass("active");
	});

	$("#tracks").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({right: "0", left: "50%"}, 1500) 
		$(".active").removeClass("active");
		};
		$("#tracks-page").fadeIn();
		$("#tracks-page").animate({left: "0%", right: "50%"}, 1500);
		$("#tracks-page").addClass("active");
	});
});

