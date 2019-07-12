var fas = document.querySelector('.burgerMenu__btn');
var burgerMenu__list = document.querySelector('#burgerMenu__list');
var form_btn = document.querySelector('.form__btn');
var items = document.querySelectorAll('.ourScills__item');
var formWindow = document.querySelector('.formWindow');
var call__btn = document.querySelector('.call__btn');
var form = document.querySelector('.call__btn-form');
var cross = document.querySelector('#form__icon');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next')
var callText = document.querySelector('.call__informText');
var contForm = document.querySelector('.contactForm-active');
var contBtn = document.querySelector('.contactFormBtn');
var formFields = document.querySelectorAll('input');
var formBtn = document.querySelector('.formInform__btn');
var formF=document.querySelectorAll('.rfield');

//block1

var header = document.querySelector('.blockOne');
document.onscroll= function()
{
    var headerPos = scrollTop(header);
    if(headerPos>400)
    {
        header.classList.add('blockOne-active');
    }
    else {
        header.classList.remove('blockOne-active');
    }
}
function scrollTop(el)
{
    return el.getBoundingClientRect().top + pageYOffset;
}
//Our works SEction

var worksBtn = document.querySelectorAll('.works__buttonsItem');
var worksPhoto = document.querySelectorAll('.works__photoImg');
var worksItems = document.querySelector('.works__photo');


for (var i = 0; i < worksBtn.length; i++) {

    worksBtn[i].onclick=function()
    {
        var buttonType = this.getAttribute('data-type');
        var worksBlock = document.querySelector('.works__photo');

        worksBlock.innerHTML = '';
        for (var i = 0; i < worksPhoto.length; i++) {

            var workType = worksPhoto[i].getAttribute('data-type');
            if (buttonType == workType ||!buttonType) {
                worksBlock.appendChild(worksPhoto[i]);
            }
           
        }
    }
}




    fas.onclick = function () {
        burgerMenu__list.classList.toggle('burger__menu-active');
        fas.classList.toggle('fa-times');
    }


for (var i = 0; i < items.length; i++) {
         items[i].onclick = function () {
            this.querySelector('.ourScills__itemText').classList.toggle('ourScills__itemText-active');
        }
    }

    call__btn.onclick = function () {
        form.classList.toggle('call__btn-form-active');
        form.style.display = "block";


    }
    cross.onclick = function () {
        form.classList.remove('call__btn-form-active');
        form.style.display = "none";
    }
    form_btn.onclick = function (e) {

        e.preventDefault(e);
        formWindow.classList.add('formWindow-active');
        for (var i = 0; i < formF.length; i++) {
            if (formF[i].value != "") 
            {
                
                form.style.display = "none";
                setTimeout(function () {
            
            formWindow.classList.remove('formWindow-active');
        }, 2000);
            
            }
           else
             {
                formFields[i].style.border = '1px solid red';  
                form.style.display="block";
                formWindow.style.display='none';
                 
            formF.value="";
          }
    }
}


    // slider MENU
    var slideIndex = 1;
    showSlides(slideIndex);
    prev.onclick = function () {
        plusSlides(-1);
    }
    next.onclick = function () {
        plusSlides(1);
    }
    setInterval(function () {
        callText.style.display = "flex";
    }, 10000);
    setInterval(function () {
        callText.style.display = "none";
    }, 30000);

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
            formFields[i].value="";
        }

    }





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
