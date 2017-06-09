$(document).ready(function(){
	var slider = $('.js-slid');
	var sliderImage = $('.slider__item');

    slider.slick({
    	autoplay: true,
    	autoplaySpeed: 5000,
    	arrows: false,
    	dots: false,
        initialSlide: 0
    	

    });    
});