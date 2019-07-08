	

//DOM Document Object Model 
var fas = document.querySelector('.burgerMenu__btn');
var burgerMenu__list = document.querySelector('#burgerMenu__list');

fas.onclick = function()
{
    burgerMenu__list.classList.toggle('burger__menu-active');
    fas.classList.toggle('fa-times');
}

var items=document.querySelectorAll('.ourScills__item');
for(var i=0;i<items.length;i++)
{
items[i].onclick=function()
{
	this.querySelector('.ourScills__itemText').classList.toggle('ourScills__itemText-active');
}
}
var call__btn=document.querySelector('.call__btn');
var form=document.querySelector('.call__btn-form');
var cross=document.querySelector('#form__icon');
call__btn.onclick = function()
{
	form.classList.toggle('call__btn-form-active');
}
cross.onclick=function()
{
	form.classList.remove('call__btn-form-active');
}
     

// slider MENU
var slideIndex = 1;
showSlides(slideIndex);
var prev=document.querySelector('.prev');
var next=document.querySelector('.next')

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
prev.onclick=function()
{
	plusSlides(-1);
}
next.onclick=function()
{
	plusSlides(1);
}



