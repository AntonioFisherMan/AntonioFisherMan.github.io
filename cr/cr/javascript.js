

//DOM Document Object Model 
var fas = document.querySelector('.burgerMenu__btn');
var burgerMenu__list = document.querySelector('#burgerMenu__list');
var form_btn = document.querySelector('.form__btn');
var formWindow = document.querySelector('.formWindow');

fas.onclick = function () {
    burgerMenu__list.classList.toggle('burger__menu-active');
    fas.classList.toggle('fa-times');
}

var items = document.querySelectorAll('.ourScills__item');
for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        this.querySelector('.ourScills__itemText').classList.toggle('ourScills__itemText-active');
    }
}
var call__btn = document.querySelector('.call__btn');
var form = document.querySelector('.call__btn-form');
var cross = document.querySelector('#form__icon');
call__btn.onclick = function () {
    form.classList.toggle('call__btn-form-active');
    form.style.display = "block";
}
cross.onclick = function () {
    form.classList.remove('call__btn-form-active');
    form.style.display = "none";
}
form_btn.onclick=function(e)
{
    e.preventDefault(e);
    formWindow.classList.add('formWindow-active');
    setTimeout(function () {
    form.style.display = "none";
    formWindow.classList.remove('formWindow-active');
    }, 2000);
   
}


// slider MENU
var slideIndex = 1;
showSlides(slideIndex);
var prev = document.querySelector('.prev');
var next = document.querySelector('.next')

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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
prev.onclick = function () {
    plusSlides(-1);
}
next.onclick = function () {
    plusSlides(1);
}

var callText = document.querySelector('.call__informText');
var contForm = document.querySelector('.contactForm-active');
var contBtn = document.querySelector('.contactFormBtn');
var formFields = document.querySelectorAll('input');
setInterval(function () {
    callText.style.display = "flex";
}, 10000);
setInterval(function () {
    callText.style.display = "none";
}, 30000);
var formBtn = document.querySelector('.formInform__btn');
formBtn.onclick = function (e) {
    event.preventDefault(e);

    for (var i = 0; i < formFields.length; i++) {
        if (formFields[i].value != "") {
            contForm.style.display = "block";
          
        }
        else {
            formFields[i].style.border = '1px solid red';
            contForm.style.display = "none";
        }

    }
}
contBtn.onclick = function () {
    contForm.style.display = "none";
  
    for (var i = 0; i < formFields.length; i++) {
        formFields[i].style.border = '2px solid black';
    }

}


/*function myAlert(text,text1) {
    alert(text + text1);
}
setTimeout(function ()
{
    myAlert('Hello',' world');
    
}, 3000);
var btn = document.querySelector('.alert');
var count = 0;
btn.onclick=function()
{
    var myTimeout;
    if(count<1)
    {
        myTimeout=setTimeout(function () {
            alert('This is first launch');
            clearTimeout(myTimeout);
        }, 1000);
    }
    count++;
    console.log(myTimeout);
   
}*/
