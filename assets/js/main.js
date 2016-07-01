// slideshow galery
$(function () {
	if (window.matchMedia('(max-width: 468px)').matches) {
		setInterval(function () {
			$("#galerie ul").animate({
				marginLeft: -175
			}, 600, function () {
				$(this).css({
					marginLeft: 0
				}).find("li:last").after($(this).find("li:first"));
			})
		}, 3500);
	} else {
		setInterval(function () {
			$("#galerie ul").animate({
				marginLeft: -300
			}, 600, function () {
				$(this).css({
					marginLeft: 0
				}).find("li:last").after($(this).find("li:first"));
			})
		}, 3500);
	}
});