var addBtn = document.querySelector('.manageBlock__item-add');
var removeBtn = document.querySelector('.manageBlock__item-remove');
var galleryContent = document.querySelector('.gallery__content');
var galleryItem = galleryContent.querySelectorAll('.galleryItem');
var itemsArray = [];
var nextElem;
var modalWindow = document.querySelector('.modalWindow');

for ( var i = 0; i < galleryItem.length; i++ ) {
    itemsArray[i] = galleryItem[i].innerHTML;
}


addBtn.onclick = function() {
    if ( itemsArray.length < galleryItem.length ) {
        nextElem = galleryItem[itemsArray.length].innerHTML;
        itemsArray.push(nextElem);

        galleryContent.innerHTML = '';

        for ( var i = 0; i < itemsArray.length; i++ ) {
            galleryContent.innerHTML += '<div class="gallaryItem">' + itemsArray[i] + '</div>';
             showModalWindow('список полностью заполнен','green');
        }
       
    }
}

removeBtn.onclick = function() {
    if ( itemsArray.length > 0 ) {
        itemsArray.pop();

        galleryContent.innerHTML = '';
        showModalWindow('список полностью удален','red');

    } 
}
function showModalWindow(title, type) {
    modalWindow.classList.remove('modalWindow-hide');
    modalWindow.classList.add('modalWindow-' + type);
    modalWindow.querySelector('.modalWindow__title').innerHTML = title;
    modalWindow.querySelector('.modalWindow__btn').onclick = function() {
        modalWindow.classList.add('modalWindow-hide');
        modalWindow.classList.remove('modalWindow-' + type);
    }}