$(document).ready(function(){

$('.next').click(function()
{
	var currentSlide=$('.slider__items-active');
	var currentIndex=$('.slider__items-active').index();
	var  nextSlideIndex=currentIndex+1;
	var nextSlide=$('.slider__items').eq(nextSlideIndex);
	currentSlide.fadeOut(1000);
	currentSlide.removeClass('slider__items-active');
	if(nextSlideIndex==($('.slider__items:last').index()+1))
	{
		$('.slider__items').eq(0).fadeIn(1000);
		$('.slider__items').eq(0).addClass('slider__items-acive');
	}
    else{
    	nextSlide.fadeIn(1000);
    	nextSlide.addClass('slider__items-active');
    }
});
$('.prev').click(function()
{
	var currentSlide=$('.slider__items-active ');
	var currentIndex=$('.slider__items-active').index();
	var  prevSlideIndex=currentIndex-1;
	var prevSlide=$('.slider__items').eq(prevSlideIndex);
	currentSlide.fadeOut(1000);
	currentSlide.removeClass('slider__items-active');
	prevSlide.fadeIn(1000);
	prevSlide.addClass('slider__items-active');
});
});
