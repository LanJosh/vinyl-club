$(function () {
	var change_img_time		= 5000;
	var transition_speed	= 2000; 
	var slideshow			= $("#bg-images"),
		listItems			= slideshow.children('li')
		listLen				= listItems.length,
		i					= 0

	changeList = function () {
		listItems.eq(i).fadeOut(transition_speed)
		i+=1
		if (i === listLen) {
			i = 0
		}
		listItems.eq(i).fadeIn(transition_speed);
		};

	setInterval(changeList, change_img_time)
});
