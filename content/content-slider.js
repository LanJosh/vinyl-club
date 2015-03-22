// TODO flesh out helper function

$(function () {
	$("#about").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		};
		$("#about-content").animate({width: "75%"}, 2000);
		$("#about-content").animate({borderWidth: "1"}, 'fast', function() {
		$("#about-page").animate({width: "50%"}, 2000);
		$("#about-page").addClass("active");
		});
	});
	
	$("#playlist").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		};
		$("#about-content").animate({width: "75%"}, 2000);
		$("#about-content").animate({borderWidth: "1"}, 'fast', function() {
		$("#about-page").animate({width: "50%"}, 2000);
		$("#about-page").addClass("active");
		});
	});
	
	$("#membership").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		};
		$("#about-content").animate({width: "75%"}, 2000);
		$("#about-content").animate({borderWidth: "1"}, 'fast', function() {
		$("#about-page").animate({width: "50%"}, 2000);
		$("#about-page").addClass("active");
		});
	});

	$("#tracks").click(function() {
		$("#main-logo").fadeOut(1000);
		if ($(".active").length !== 0) {
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		};
		$("#about-content").animate({width: "75%"}, 2000);
		$("#about-content").animate({borderWidth: "1"}, 'fast', function() {
		$("#about-page").animate({width: "50%"}, 2000);
		$("#about-page").addClass("active");
		});
	});
});

