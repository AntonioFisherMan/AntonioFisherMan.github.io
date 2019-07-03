var formFields = document.querySelectorAll('input');

var student = {};
var studentBase = [];
var block = document.querySelector('#block');
var button = document.querySelector('#input_btn');


button.onclick = function (e) {
    e.preventDefault();
    
    for (var i = 0; i < formFields.length; i++)
    {
        formFields[i].style.border = 'none';
    }
    for (var i = 0; i < formFields.length; i++) {

        var fieldName = formFields[i].getAttribute('name');
      
        if (formFields[i].value != "") {
            student[fieldName] = formFields[i].value;
        }
        else {     
            formFields[i].style.border ='4px solid red';
              var  window = document.querySelector('.window');
 window.classList.add('window-active');
var  close=document.querySelector('#icon-close');
var closetext=document.querySelector('.window__text')
  close.onclick=function()
    {
       window.classList.toggle('window');
       closetext.innerHTML='';
       window.classList.toggle('icon-close-active');
    }
        }
        formFields[i].value = ''; 
    }

  
  
    

    studentBase.push(student);
    var block = document.querySelector('#block');
    block.classList.add('block-active');
    var h = document.createElement('h');
    h.classList.add('h');
    var p = document.createElement('div');
    p.classList.add('p');
    var div = document.createElement('div');
    div.classList.add('buttons__item');

    var fiel = document.createElement('div');
    for (var key in student) {
        fiel = (student[key]);

        if (key == 'name' || key == 'surname') {
            h.innerHTML += fiel + ' ';
        }
        else {

            p.innerHTML += '<p><span></span>' + key + ': <span>' + fiel + '</span></p>';
        }
        div.appendChild(h);
        div.appendChild(p);
        block.appendChild(div);
    }
    var buttons = document.querySelectorAll('.buttons__item');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            buttonsOpen(this);
        }
        buttons[i].id = i;
    }
    function buttonsOpen(i) {
        var buffer = buttons[i.id];
        buffer.querySelector('.p').classList.toggle('open');
    }

}
