// TODO flesh out helper function

$(function () {
	$("#about").click(function() {
		$("#main-logo").hide();
		$(".active").animate({width: "0"}, 2000) 
		$(".active").removeClass("active");
		$("#about-page").animate({width: "50%"}, 2000);
		$("#about-page").addClass("active");
	});
	
	$("#playlist").click(function() {
		$("#main-logo").hide();
		$("div.active").animate({width: "0"}, 2000)
		$("div.active").removeClass("active");
		$("#playlist-page").animate({width: "50%"}, 2000);
		$("#playlist-page").addClass("active");
	});
	
	$("#membership").click(function() {
		$("#main-logo").hide();
		$("div.active").animate({width: "0"}, 2000) 
		$("div.active").removeClass("active");
		$("#membership-page").animate({width: "50%"}, 2000);
		$("#membership-page").addClass("active");
	});

	$("#tracks").click(function() {
		$("#main-logo").hide();
		$("div.active").animate({width: "0"}, 2000)
		$("div.active").removeClass("active");
		$("#tracks-page").animate({width: "50%"}, 2000);
		$("#tracks-page").addClass("active");
	});
});

