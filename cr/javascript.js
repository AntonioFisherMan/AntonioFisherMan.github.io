﻿	

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
     

