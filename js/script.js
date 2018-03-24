var imageHeight = 500;
var imageWidth  = 800;

$(function(){
	var carouselList = $('#carousel ul');
	console.log('before setTimeout');
	setTimeout(changeSlide, 3000); //after 3 seconds will change the slide once
	setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
	
	function changeSlide() {
		console.log('changeSlide');
		carouselList.animate({'marginLeft':-1*imageWidth}, 500, moveFirstSlide);
	}

	function moveFirstSlide() {
		console.log('moveFirstSlide');
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
});
