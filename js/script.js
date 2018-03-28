

$(function(){

	var imageHeight = 500;
	var imageWidth  = 800;
	var animationIntervalMs = 3000;
	var animationDurationMs = 500;
	var carouselList = $('#carousel ul');
	var direction = 'right';
	var intervalId = setInterval(changeSlide, animationIntervalMs);
	var currentImgIdx= 0;
	var carouselSize = 5;

	function changeSlide() {
		if (direction === 'left') {
			carouselList.animate({'marginLeft':imageWidth}, animationDurationMs, moveSlide);
		} else if (direction === 'right') {
			carouselList.animate({'marginLeft':-1*imageWidth}, animationDurationMs, moveSlide);
		}
	}

	function moveSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		updateCurrentImage();
		console.log('moveSlide: ' + direction + ', current: ' + Number(currentImgIdx + 1));

		if (direction === 'left') {
			lastItem.insertBefore(firstItem);
		} else {
			lastItem.after(firstItem);
		}
		carouselList.css({'marginLeft':0});
	}

	function updateCurrentImage() {

		var imgIndicators = $('#current-img-indicator div i');

		if (direction === 'left') {
			currentImgIdx = (currentImgIdx > 0) ? currentImgIdx- 1: carouselSize - 1;
		} else {
			currentImgIdx= (currentImgIdx >= carouselSize-1) ? 0: currentImgIdx+ 1;
		}
		$.each(imgIndicators, function(index, value) {
			if (index == (currentImgIdx)){
				$( this ).addClass('img-current');
				$( this ).removeClass('img-other');
			} else {
				$( this ).addClass('img-other');
				$( this ).addClass('img-current');
			}
		});
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
