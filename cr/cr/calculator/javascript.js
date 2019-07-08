plus=document.getElementById('plus');
plus.onclick=function (){
	
	var num1, num2, result,history;

    num1=document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2=document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = 'Вы ввели:'+parseInt(num1)+'+'+parseInt(num2)+'='+parseInt(num1 + num2);
	
	equal=document.getElementById('equal');
	equal.onclick=function()
{
	document.getElementById('calculator__result').innerHTML=result;

}

	
}
	
minus=document.getElementById('minus');
minus.onclick=function (){
	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = 'Вы ввели:'+parseInt(num1)+'-'+parseInt(num2)+'='+parseInt(num1 - num2);
	equal=document.getElementById('equal');
equal.onclick=function()
 {
	document.getElementById('calculator__result').innerHTML=result;
 }
	
}

multiply=document.getElementById('multiply');
multiply.onclick=function (){
	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = 'Вы ввели:'+parseInt(num1)+'*'+parseInt(num2)+'='+parseInt(num1 * num2);
	equal.onclick=function()
 {
	document.getElementById('calculator__result').innerHTML=result;
 }
	
}


division=document.getElementById('division');
division.onclick=function (){	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = 'Вы ввели:'+parseInt(num1)+'/'+parseInt(num2)+'='+parseInt(num1/num2);
	
	equal.onclick=function()
 {
	document.getElementById('calculator__result').innerHTML=result;
 }
	
}





