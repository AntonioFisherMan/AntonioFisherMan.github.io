/*PORTFOLIO BLOCK*/
var photos=document.querySelector('#portfolio__galleryColumn');
var btn=document.querySelector('.portfolio__btn');

btn.onclick=function()
{
	photos.style.display="flex";
	btn.style.display="none";
}
/*TESTONOMINALS BLOCK*/

var slideIndex=1;
function plusSlides(n)
{
showSlides(slideIndex+=n);
}
function currentSlides(n)
{
	showSlides(slideIndex=n);
}
function showSlides(n)
{
var i;
var slides=document.getElementsByClassName("review__sliderContent");
var dots=document.getElementsByClassName("dot");
 if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
}
showSlides();