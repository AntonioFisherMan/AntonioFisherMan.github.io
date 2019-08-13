var carSpeed = document.querySelector('.carInfoSpeed');
var carInform= document.querySelector('.carInfoData');
var speedBtnUp = document.querySelector('.carInfoBtnUp');
var speedBtnDown = document.querySelector('.carInfoBtnDown');
var btnOff= document.querySelector('.off');
var btnOn = document.querySelector('.on');
var carStatus=document .querySelector('.carStatus');
var gears = document.querySelectorAll('.numberGears');


for(var i=0;i<gears.length;i++)
{ 
    gears[i].onclick=function()
    {
        var gearsType = gears[i].getAttribute('data-type');
        
    }
    
} 

var car = {
    model: 'Audi',
    color: 'grey',
    mark:  'Q5',
    speed: 0,
    gears:5,
    maxspeed:60,
    fuel:0,
    getInfo: function () {
        return 'model: ' + this.model+'<br>'+
               'color: ' + this.color + '<br>' +
               'mark: ' + this.mark + '<br>' +
               'number of gears: '+this.gears+'<br>'+
               'maxspeed: ' + this.maxspeed+'<br>'+
               'quantity of fuel: '+this.fuel;

    },
    speedUp: function(){
        this.speed++;
        return this.speed;
    },
    speedDown:function()
    {
        var minSpeed=0;
        this.speed--;
       if(minSpeed>this.speed)
       {
       this.speed=0;
       }
    return this.speed; 
    },

    off:function()
    {
         this.status='Машина не заведена';
         carSpeed.innerHTML=0;
         car.speed=0;
    },
    on:function()
   {
        this.status = 'Машина  заведена';
    },
    check:function()
   {
        if(this.speed>=10)
        {
            alert('Превышена скорость авто');
            this.speed = -1;
        }
   },
   quantityFuel:function()
   {
    if(this.fuel=0)
    {
        car.off();
        console.log('privet');
    }
    if(this.fuel>0)
    {
        console.log('car is driving');
    }
   },

};
carInform.innerHTML = car.getInfo();
carSpeed.innerHTML = car.speed;
speedBtnUp.onclick = function ()
{
    carSpeed.innerHTML = car.speedUp();
    car.check();
   
}
speedBtnDown.onclick = function () {
    carSpeed.innerHTML = car.speedDown();
}

btnOff.onclick = function ()
{

    car.off();
    carStatus.innerHTML=car.status;
 carStatus.style.display="block";
     function engineOff() {
 carStatus.style.display="none";
}
setTimeout(engineOff, 2000);
}

btnOn.onclick=function()
{ 

    car.on();
    carStatus.innerHTML=car.status;

 carStatus.style.display="block";
    function engineOn() {
 carStatus.style.display="none";
}
setTimeout(engineOn, 2000);
    
    
}








/*function show(objName, obj) {
    for (var i in obj) {
        var result = "";
        result += objName + "." + i + " = " + obj[i] + "\n";
    }
    return result;
}*/