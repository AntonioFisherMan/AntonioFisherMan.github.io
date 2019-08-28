function Car(model, color, mark,  gears, maxspeed, fuel, consumpt,speed) {
    this.model = model || 'Audi'
    this.color = color || 'grey'
    this.mark = mark || 'Q5'
    this.speed = parseInt(speed)||0
    this.maxspeed = parseInt(maxspeed)||160
    this.gears = parseInt(gears) ||5
    this.fuel = parseInt(fuel) ||80
    this.consumpt = parseInt(consumpt)||0

    var that = this;
    //variable
    var timerId;
    var speedParam=1;
    var carInfo1, carInfoData, carStatus, carInfo, carInfoSpeed, carBtnsSpeed;
    var speedBtnUp, speedBtnDown, carOnOf, btnOff, btnOn;
    var gearsDisplay, carGears, carFuel, carFuelInfo, carFuelBackground;




    this.initial = function () {
        drawInterface();
    };
    this.services = {
        prefix: '__',
    };
    //metods
    this.getInfo = function () {
        return 'model: ' + this.model + '<br>' +
               'color: ' + this.color + '<br>' +
               'mark: ' + this.mark + '<br>' +
               'number of gears: ' + this.gears + '<br>' +
               'maxspeed: ' + this.maxspeed;


    }
    this.fuelInfo = function () {
        return 'Supply of fuel: ' + this.fuel + '<br>' +
               'Consumpt of fuel: ' + this.consumpt;
    }


    this.setConsumpt = function (consumpt) {
        this.consumpt = consumpt;
    }
    this.speedUp = function () {
        var maxSpeed = 160;
        this.speed++;
        if (maxSpeed < this.speed) {
            this.speed = maxSpeed;
        }
        return this.speed;
    }

    this.speedDown = function () {
        var minSpeed = 0;
        this.speed--;
        if (minSpeed > this.speed) {
            this.speed = 0;
        }

        return this.speed;
    }

    this.off = function () {
        carStatus.style.display = 'block';
        carStatus.innerHTML = 'The car is not driving';
        function engineOff() {
            carStatus.style.display = 'none';
        }
        setTimeout(engineOff, 2000);
        that.speed = 0;
        carGears.innerHTML = 0;
        speedBtnUp.style.display = "none";
        speedBtnDown.style.display = "none";
        clearInterval(speedUp);
        clearInterval(timerId);
    }

    this.on = function () {
        carStatus.style.display = 'block';
        carStatus.innerHTML = 'The car is driving';
        function engineOn() {
        carStatus.style.display = 'none';
        that.tankVolume();
        }
        setTimeout(engineOn, 2000);

        speedBtnUp.style.display = "block";
        speedBtnDown.style.display = "block";
    }

    this.gearsSwitchOn = function () {
        if (carGears == 0) {
            this.gears = 0;
        }
        if (this.speed >= 10) {
            carGears.innerHTML = 2;
            this.speed += 10;
        }
        if (this.speed >= 30) {
            carGears.innerHTML = 3;
            this.speed += 10;
        }
        if (this.speed >= 50) {
            carGears.innerHTML = 4;
            this.speed += 10;
        }
        if (this.speed >= 80) {
            carGears.innerHTML = 5;

        }
    }

    this.gearsSwitchOff = function () {
        if (this.speed >= 0 || this.speed < 10) {
            carGears.innerHTML = 1;
        }
        if (this.speed >= 10) {
            carGears.innerHTML = 2;
            this.speed -= 10;
        }
        if (this.speed >= 30) {
            carGears.innerHTML = 3;
            this.speed -= 10;
        }
        if (this.speed >= 50) {
            carGears.innerHTML = 4;
            this.speed -= 10;
        }
        if (this.speed >= 80) {
            carGears.innerHTML = 5;
            this.speed -= 10;
        }
    }

    this.consumptFuel = function () {
        if (carGears.innerHTML == 1) {
            that.setConsumpt(8.4);
            carFuelInfo.innerHTML = that.fuelInfo();
        }
        else if (carGears.innerHTML == 2) {
            that.setConsumpt(7.2);
            carFuelInfo.innerHTML = that.fuelInfo();
        }
        else if (carGears.innerHTML == 3) {
            that.setConsumpt(6.3);
            carFuelInfo.innerHTML = that.fuelInfo();
        }
        else if (carGears.innerHTML == 4) {
            that.setConsumpt(5.4);
            carFuelInfo.innerHTML = that.fuelInfo();
        }
        else if (carGears.innerHTML == 5) {
            that.setConsumpt(4.5);
            carFuelInfo.innerHTML = that.fuelInfo();
        }
    }
    this.fuelBack=function()
    {
        carFuelBackground.style.display = "none";
    }
    this.tankVolume=function(){
        {
        
            timerId = setInterval(function () {
                that.fuel -= 1;
                if (that.fuel <= 0) {
                    
                    clearInterval(timerId);
                   
                    alert('TankVolume is empty');
                    that.off();
                    that.fuel = 0;
                   
                }
                carFuelInfo.innerHTML = that.fuelInfo();
            }, 1000/speedParam);
        }
    }


    var counter = 0;
    var speedUp;


    function drawInterface() {
        var dataCarBlock = '',
            fuelCarBlock = '';
        carBlock = document.createElement('section');
        carBlock.id = that.services.prefix + 'car';
        carBlock.classList.add('carBlock');
        document.body.insertBefore(carBlock, document.querySelector('#mainJs'));

        carBlock.innerHTML =
         '<div class="carConstr">' +
            ////////////////////////////////////
            '<div class="carInfo1">' +
                '<p class="carInfoData">' + '</p>' +
                '<p class="carStatus">' + '</p>' +
            '</div>' +
            ////////////////////////////////////
            ' <div class="carInfo">' +
                '<p class="carInfoSpeed">' + that.speed + '</p>' +
                '<div class="carInfoBtns">' +
                    '<button class="carInfoBtnUp">' + 'SpeedUp' + '</button>' +
                    '<button class="carInfoBtnDown">' + 'SpeedDown' + '</button>' +
                '</div>' +
                '<div class="carDisplay">' +
                    '<button class="on">' + 'On' + '</button>' +
                    '<button class="off">' + 'Off' + '</button>' +
                '</div>' +
                '<div class="numberGears">' +
                    '<p class="numberGearsText">' + that.gears + '</p>' +
                '</div>' +
            '</div>' +
            ////////////////////////////////////////
            '<div class="carFuel">' +
                '<p class="carFuelInfo">' + '</p>' +
                '<div class="carFuelBackground">' +
                    '<p class="carFuelIndicator">' + 'Car fuel left' + '</p>' +
                '</div>' +
            '</div>' +
        '</div>' // main block;



        carInfo1 = carBlock.querySelector('.carInfo1');
        carInfo = carBlock.querySelector('.carInfo');

        carInfoData = carInfo1.querySelector('.carInfoData');
        carStatus = carInfo1.querySelector('.carStatus');
        carStatus.innerHTML = '';

        carInfoSpeed = carInfo.querySelector('.carInfoSpeed');
        carInfoSpeed.innerHTML = 0;

        carBtnsSpeed = carInfo.querySelector('.carInfoBtns');

        speedBtnUp = carBtnsSpeed.querySelector('.carInfoBtnUp');
        speedBtnUp.innerHTML = 'speedUp';

        speedBtnDown = carBtnsSpeed.querySelector('.carInfoBtnDown');
        speedBtnDown.innerHTML = 'speedDown';

        carOnOf = carInfo.querySelector('.carDisplay');

        btnOff = carOnOf.querySelector('.off');
        btnOff.innerHTML = 'Off';

        btnOn = carOnOf.querySelector('.on');
        btnOn.innerHTML = 'On';

        gearsDisplay = carInfo.querySelector('.numberGears');

        carGears = gearsDisplay.querySelector('.numberGearsText');
        carGears.innerHTML = 0;

        carFuel = carBlock.querySelector('.carFuel');

        carFuelInfo = carFuel.querySelector('.carFuelInfo');

        carFuelBackground = carFuel.querySelector('.carFuelBackground');
        carFuelBackground.innerHTML = 'Car Fuel Left';


        speedBtnUp.onmousedown = function () {
            
            speedUp = setInterval(function () {
               
                counter++;
                that.gearsSwitchOn();
                that.consumptFuel();
                that.speedUp();
                carInfoSpeed.innerHTML = that.speed;
                speedParam += 0.2;
            
            }, 100);
        }
        speedBtnUp.onmouseup = function () {
            clearInterval(speedUp);
            clearInterval(timerId);
            that.tankVolume();
        }

        var speedDown;
        speedBtnDown.onmousedown = function () {
            speedDown = setInterval(function () {
                counter--;
                that.speedDown()
                that.gearsSwitchOff();
                carInfoSpeed.innerHTML = that.speed;
                speedParam -= 0.2;
                if(speedParam<1)
                {
                    speedParam = 1;
                }
            }, 100);
            that.consumptFuel();
        }
        speedBtnDown.onmouseup = function () {
            clearInterval(speedDown);
            clearInterval(timerId);
            that.tankVolume();
        }

        btnOff.onclick = function () {
            that.off();
        }

        btnOn.onclick = function () {
            
            that.on();

        }

        carInfoData.innerHTML = that.getInfo();
        carFuelInfo.innerHTML = that.fuelInfo();
    }

};
function factory() {
     var carInformBlock=document.createElement('div');
    var carFactor = document.querySelector('.carOption__headline');
    var createCar = document.querySelector('.new__car');
    var carInterface = document.querySelector('.carOption__form');
    var textCar = document.querySelector('.textCar');
    var inputs = document.querySelectorAll('.inputs');
    var carIcon=document.querySelector('.fa');
    
        
    /*function check()
    {
        for (var i = 0; i < inputs.length; i++)
        {
            if (inputs[i].value !='') {
                
            }
            else
            {
                inputs[i].classList.add('inputs-active');
            }
         
        }

        
    }*/
    function carInformOn() {
            carInformBlock.style.display="flex";
            carIcon.style.display="block";
        }

 carFactor.onclick=function()
    {
     b()
        carInterface.classList.toggle('carOption__form-active');
       

    }

    createCar.onclick = function (e) {

        e.preventDefault();
        textCar.innerHTML = document.querySelector('#carOption__model').value + ' '
        + document.querySelector('#carOption__mark').value;
        textCar.classList.toggle('textCar-active');
        carInterface.classList.remove('carOption__form-active');
        check();
        carInformOn();
    }
function b()
{
    carIcon.onclick = function (e)
    {
       
        e.preventDefault();
        var carOption = {
            model: document.querySelector('#carOption__model').value,
            color: document.querySelector('#carOption__color').value,
            mark: document.querySelector('#carOption__mark').value,
            gears: document.querySelector('#carOption__gears').value,
            maxspeed: document.querySelector('#carOption__maxSpeed').value,
            fuel: document.querySelector('#carOption__fuel').value   
        };
       
        function carInformOff() {
            carInformBlock.style.display="none";
            carIcon.style.display="none";
            textCar.style.display="none";
        }
        setTimeout(carInformOff, 1000);
       
        function carPrivet()
        {
        var newCar = new Car(carOption.model, carOption.color,
        carOption.mark, carOption.gears,carOption.maxspeed,carOption.fuel);
        newCar.initial();
        }
        setTimeout(carPrivet,3000);
    }
}
    

    textCar.onclick=function()
   {
  carInformOn();
 document.body.append(carIcon);
  carInformBlock.classList='carInformBlock';
  document.body.insertBefore(carInformBlock, document.querySelector('#mainJs'));
  var carInformBLockObj={
            model: document.querySelector('#carOption__model').value,
            color: document.querySelector('#carOption__color').value,
            mark: document.querySelector('#carOption__mark').value,
            gears: document.querySelector('#carOption__gears').value,
            maxspeed: document.querySelector('#carOption__maxSpeed').value
  };

carInformBlock.innerHTML='Model: '+carInformBLockObj.model+'<br>'+
                        'Mark: '+carInformBLockObj.mark+'<br>'+
                        'Color: '+carInformBLockObj.color+'<br>'+
                        'Gears: '+carInformBLockObj.gears+'<br>'+
                        'Maxspeed: '+carInformBLockObj.maxspeed;
   }
}
var newCar = new Car(factory());
