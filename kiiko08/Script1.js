$(document).ready(function () {

    $('.next').click(function () {
        var currentSlide = $('.slider__items-active');
        var currentIndex = $('.slider__items-active').index();
        var nextSlideIndex = currentIndex + 1;
        var nextSlide = $('.slider__items').eq(nextSlideIndex);
        currentSlide.fadeOut(1000);
        currentSlide.removeClass('slider__items-active');
        if (nextSlideIndex == ($('.slider__items:last').index() + 1)) {
            $('.slider__items').eq(0).fadeIn(1010);
            $('.slider__items').eq(0).addClass('slider__items-acive');
        }
        else {
            nextSlide.fadeIn(1000);
            nextSlide.addClass('slider__items-active');
        }
    });
    $('.prev').click(function () {
        var currentSlide = $('.slider__items-active ');
        var currentIndex = $('.slider__items-active').index();
        var prevSlideIndex = currentIndex - 1;
        var prevSlide = $('.slider__items').eq(prevSlideIndex);
        currentSlide.fadeOut(1000);
        currentSlide.removeClass('slider__items-active');
        prevSlide.fadeIn(1000);
        prevSlide.addClass('slider__items-active');
    });
});
var slider__itemsHeadline = document.querySelectorAll('.slider__itemsHeadline');
for (var i = 0; i < slider__itemsHeadline.length; i++)
{
    slider__itemsHeadline[i].onclick=function()
    {
        
        this.parentNode.querySelector('.slider__itemsText').classList.toggle('slider__itemsText-active');
        
    }
}
var sliderOperators=document.querySelectorAll('.sliderOperatorsColumnText');

for(var i=0;i<sliderOperators.length;i++)
{
	
	sliderOperators[i].onclick=function() {
	this.parentNode.querySelector('.sliderOperatorsInform').classList.toggle('sliderOperatorsInform-active');
	
	}

}

