//HeaderBlock




var headerIcon=document.querySelector('.header__blockBtn');
var headerMenu=document.querySelector('.header__blockMenu');
var burgerBtn=document.querySelector('.burgerBtn');
var burgerMenu=document.querySelector('.burgerMenu__list');
burgerBtn.onclick=function()
{
burgerMenu.classList.toggle('burgerMenu__list-active');
}
headerIcon.onclick=function()
{
headerMenu.classList.toggle('header__blockMenu-active');
}

/*ABOUT US*/
//SLIDER
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');


var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n)
{
	showSlides(slideIndex+=n);
}
function currentSlides(n)
{
	showSlides(slideIndex=n);
}
 function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide__item");
        var dots = document.getElementsByClassName("dotA");
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
         prev.onclick=function()
{
plusSlides(-1);
}
next.onclick=function()
{
plusSlides(1);
}
}

/*RewiewSLIDER*/
var nextR=document.querySelector('#next');
var prevR=document.querySelector('#prev');
var slideIndexR=1;
showSlidesR(slideIndex);
function plusSlidesR(n)
{
	showSlidesR(slideIndex+=n);
}
function currentSlidesR(n)
{
	showSlidesR(slideIndex=n);
}
 function showSlidesR(n) {
        var i;
        var slides = document.getElementsByClassName("reviewsSliderPhoto");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
prevR.onclick=function()
{
plusSlidesR(1);
}
nextR.onclick=function()
{
plusSlidesR(-1);
}
}
/*BLOCK MAP */
//FORM
var mapInputs=document.querySelectorAll('#mapInput');

for(var i=0;i<mapInputs.length;i++)
{
mapInputs[i].onfocus=function()
{
	if(!this.value.includes('@'))
	{
		this.value=' ';

	}
	}
}
for(var i=0;i<mapInputs.length;i++)
	{
mapInputs[i].onblur=function()
{
	if(this.value==' ')
	{
		this.value=this.name;
     		
     	console.log('dsf');
    }
    else{
    this.value=this.value;
    	
    }
}

}