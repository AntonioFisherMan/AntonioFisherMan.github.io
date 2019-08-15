var carSpeed = document.querySelector('.carInfoSpeed');
var carInform = document.querySelector('.carInfoData');
var speedBtnUp = document.querySelector('.carInfoBtnUp');
var speedBtnDown = document.querySelector('.carInfoBtnDown');
var btnOff = document.querySelector('.off');
var btnOn = document.querySelector('.on');
var carStatus = document.querySelector('.carStatus');
var carGears = document.querySelector('.numberGearsText');
var carFuel = document.querySelector('.carFuelInfo');
var carFuelIndicator = document.querySelector('.carFuelIndicator');
var fuelBack = document.querySelector('.carFuelBackground');



var car = {
    model: 'Audi',
    color: 'grey',
    mark: 'Q5',
    speed: 0,
    gears: 5,
    maxspeed: 160,
    fuel: 80,
    consumpt: 0,

    getInfo: function () {
        return 'model: ' + this.model + '<br>' +
               'color: ' + this.color + '<br>' +
               'mark: ' + this.mark + '<br>' +
               'number of gears: ' + this.gears + '<br>' +
               'maxspeed: ' + this.maxspeed;
              

    },

    fuelInfo:function()
    {
        return 'Supply of fuel: ' + this.fuel + '<br>' +
               'Consumpt of fuel: ' + this.consumpt;
    },


    getConsumpt:function()
    {
        return this.consumpt;
    },
    setConsumpt: function (cons) {
        this.consumpt = cons;
    },
    getFuel:function()
    {
        return this.fuel;
    },
    setFuel: function (fue) {
        this.fuel= fue;
    },

    speedUp: function () {
       var maxSpeed=160;
        this.speed++;
        if(maxSpeed<this.speed)
        {
        this.speed=maxSpeed;
        }

       return this.speed;
        

    },

    speedDown: function () {
        var minSpeed = 0;
        this.speed--;
        if (minSpeed > this.speed) {
            this.speed = 0;
        }
        return this.speed;
    },

    off: function () {
        this.status = 'The car is not driving';
        carSpeed.innerHTML = 0;
        car.speed = 0;
    speedBtnUp.style.display="none";
     speedBtnDown.style.display="none";
    },

    on: function () {
        this.status = 'The car is driving';
        speedBtnUp.style.display="block";
     speedBtnDown.style.display="block";
    },

    
    

    gearsSwitchOn:function()
    {
    if(car.speed>=10)
        {
            carGears.innerHTML = 2;
            car.speed +=10;
        }
     if (car.speed >= 30) {
            carGears.innerHTML = 3;
            car.speed +=10;
        }
        if (car.speed >= 50) {
            carGears.innerHTML = 4;
            car.speed +=10;
        }
     if (car.speed >= 80) {
            carGears.innerHTML = 5;
           
        }

      
    },
    gearsSwitchOff:function()
    {
     if (car.speed >= 0 || car.speed < 10) {
            carGears.innerHTML = 1; 
        }
    if(car.speed>=10)
    {
        carGears.innerHTML = 2;
        car.speed -=10;
    }
    if (car.speed >= 30) {
        carGears.innerHTML = 3;
        car.speed -=10;
    }
    if (car.speed >= 50){
        carGears.innerHTML=4;
        car.speed -= 10;
    }
    if (car.speed >= 80)
    {
     carGears.innerHTML=5;
     car.speed-=10;
    }
    },
    consumptFuel: function () {
    if (carGears.innerHTML == 1) {
        car.setConsumpt(8.4);
        carFuel.innerHTML = car.fuelInfo();
    }
    else if (carGears.innerHTML == 2) {
        car.setConsumpt(7.2);
        carFuel.innerHTML = car.fuelInfo();
    }
    else if (carGears.innerHTML == 3) {
        car.setConsumpt(6.3);
        carFuel.innerHTML = car.fuelInfo();
    }
    else if (carGears.innerHTML == 4) {
        car.setConsumpt(5.4);
        carFuel.innerHTML = car.fuelInfo();
    }
    else if (carGears.innerHTML == 5) {
        car.setConsumpt(4.5);
        carFuel.innerHTML = car.fuelInfo();
    }
},
tankVolume:function(){

 if(carGears.innerHTML==1)
{
var timerId=setInterval(function()
{
car.fuel-=5;
console.log(car.fuel);
 clearInterval(timerId);
},100);
}
}

};

carFuel.innerHTML = car.fuelInfo();
carInform.innerHTML = car.getInfo();
carSpeed.innerHTML = car.speed;
var counter=0;
speedBtnUp.onmousedown= function () {

    var speedUp=setInterval(function(){
        counter++;
         car.gearsSwitchOn();
        car.consumptFuel();
        carSpeed.innerHTML = car.speedUp();
    speedBtnUp.onmouseup=function(){
        clearInterval(speedUp);
    }
    },100);
      }

speedBtnDown.onmousedown= function () {
    var speedDown=setInterval(function(){
        counter--;
       carSpeed.innerHTML = car.speedDown();
        car.gearsSwitchOff();
    speedBtnDown.onmouseup=function(){
        clearInterval(speedDown);
    }
    },100);

    car.consumptFuel(); 
     
}

btnOff.onclick = function () {

    car.off();
    carStatus.innerHTML = car.status;
    carStatus.style.display = "block";
    function engineOff() {
        carStatus.style.display = "none";

    setTimeout(engineOff, 2000);

  
}}

btnOn.onclick = function () {
    car.tankVolume();
    car.on();
    carStatus.innerHTML = car.status;

    carStatus.style.display = "block";
    function engineOn() {
        carStatus.style.display = "none";

      
    }
    setTimeout(engineOn, 2000);
     



}

