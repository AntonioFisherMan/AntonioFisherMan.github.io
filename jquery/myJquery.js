( function() {

	var $ = function $(selector) {

	var elements = document.querySelectorAll(selector);

	var obj = {};

	obj.addClass = function( className ) {
		for ( var i = 0; i < elements.length; i++ ) {
			elements[i].classList.add( className );
		}

		return obj;
	};
	obj.createElement=function()
	{
		   var el=document.querySelector('.boxes');
           var div = document.createElement('div');
          div.innerHTML = '6';
          el.appendChild(div);
          return obj;
      
      
            
	}
	obj.removeElement=function()
	{
		   var el=document.querySelector('.box');
          el.remove();
          return obj;
            
	}
obj.removeClass = function (className) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove(className);
               
            }
            return obj;
        };
        obj.hide=function()
        {	
       function bi()
       {
       	 for(var i=0;i<elements.length;i++)
        	{
        	elements[i].style.display='none';
            }
       }
         setTimeout(bi,1000);
        	
        }
        obj.show=function()
        {
        	function hi() {
  for(var i=0;i<elements.length;i++)
        	{
        	elements[i].style.display='block';
            }
}

setTimeout(hi,3000);

           
        }
        obj.toggleClass=function(className)
        {
        	for(var i=0;i<elements.length;i++)
        	{
        		elements[i].onclick=function(){
        			elements[i].classList.toggle(className);
        		}
        		return obj;
        	}
        	
        }
	obj.click = function( handler ) {
		for ( var i = 0; i < elements.length; i++ ) {
			elements[i].onclick = handler;
		}

		return obj;
	}

	return obj;
	}

	window.$ = $;

} )();


/*( function() {

	var $ = function $(selector) {

	var elements = document.querySelectorAll(selector);

	var obj = {};

	obj.addClass = function( className ) {
		for ( var i = 0; i < elements.length; i++ ) {
			elements[i].classList.add( className );
		}

		return obj;
	};
	
        

	obj.click = function( handler ) {
		for ( var i = 0; i < elements.length; i++ ) {
			elements[i].onclick = handler;
		}

		return obj;
	}

	return obj;
	}

	window.$ = $;

} )();
*/