

$(function(){

	var imageHeight = 500;
	var imageWidth  = 800;
	var animationIntervalMs = 3000;
	var carouselList = $('#carousel ul');
	var direction = 'left';
	var intervalId = setInterval(changeSlide, animationIntervalMs);

	function changeSlide() {
		if (direction === 'left') {
			carouselList.animate({'marginLeft':-1*imageWidth}, 500, moveFirstSlide);
		} else if (direction === 'right') {
			carouselList.animate({'marginLeft':imageWidth}, 500, moveFirstSlide);
		}
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		console.log('moveFirstSlide: ' + direction);

		if (direction === 'left') {
			lastItem.after(firstItem);
		} else {
			lastItem.insertBefore(firstItem);
		}
		carouselList.css({'marginLeft':0});
	}

	var buttonLeft = $('#btn-left');
	buttonLeft.click(function(){
		direction = 'left';
		clearInterval(intervalId);
		changeSlide();
		intervalId = setInterval(changeSlide, animationIntervalMs);
	});

	var buttonRight = $('#btn-right');
	buttonRight.click(function(){
		direction = 'right';
		clearInterval(intervalId);
		changeSlide();
		intervalId = setInterval(changeSlide, animationIntervalMs);
	});
});
