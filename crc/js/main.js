var burger__btn=document.querySelector('.burger__icon');
var burger__list=document.querySelector('.burger__list');
var i=document.getElementById('.burger__icon>i');
var burger=document.querySelector('.burger');
console.log(i);

burger__btn.onclick=function(){
    $(burger__btn).removeClass('fa-bars');
    burger__btn.classList.toggle('fa-times');
    burger__btn.classList.toggle('fa-bars');
    burger__list.classList.toggle('burger__list-active');
    burger.classList.toggle('burger-active');
}


$(function(){
    $('[data-toggle="tooltip"]').tooltip();    
});


