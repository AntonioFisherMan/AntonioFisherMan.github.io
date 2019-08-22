function Car(model, color, mark, speed, gears, maxspeed, fuel, consumpt) {
    this.model = model || 'Audi'
    this.color = color || 'grey'
    this.mark = mark || 'Q5'
    this.speed = speed || 0
    this.gears = gears || 5
    this.maxspeed = maxspeed || 160
    this.fuel = fuel || 80
    this.consumpt = consumpt || 0

    var that = this;
    //variable
    
  
 
    var car = document.createElement('div');
    car.classList = 'carConstr';
    document.body.appendChild(car);
    
    var carInfo1 = document.createElement('div');
    carInfo1.classList = 'carInfo1';
    car.append(carInfo1);

    var carInfoData = document.createElement('p');
    carInfoData.classList = 'carInfoData';
    carInfo1.appendChild(carInfoData);
    var carStatus = document.createElement('p');
    carStatus.classList = 'carStatus';
    carInfo1.appendChild(carStatus);
    carStatus.innerHTML = '';
   
    var carInfo = document.createElement('div');
    carInfo.classList = 'carInfo';
    car.appendChild(carInfo);
    var carInfoSpeed = document.createElement('p');
    carInfoSpeed.classList = 'carInfoSpeed';
    carInfo.appendChild(carInfoSpeed);
    carInfoSpeed.innerHTML = 0;
    var carBtnsSpeed = document.createElement('div');
    carBtnsSpeed.classList = 'carInfoBtns';
    carInfo.append(carBtnsSpeed);
    var speedBtnUp = document.createElement('button');
    speedBtnUp.classList = 'carInfoBtnUp';
    speedBtnUp.innerHTML = 'speedUp';
    carBtnsSpeed.appendChild(speedBtnUp);
    var speedBtnDown = document.createElement('button');
    speedBtnDown.classList = 'carInfoBtnDown';
    carBtnsSpeed.appendChild(speedBtnDown);
    speedBtnDown.innerHTML = 'speedDown';

    var carOnOf = document.createElement('div');
    carOnOf.classList = 'carDisplay';
    carInfo.append(carOnOf);
    var btnOff = document.createElement('button');
    btnOff.classList = 'off';
    btnOff.innerHTML = 'Off';
    carOnOf.appendChild(btnOff);
    var btnOn = document.createElement('button');
    btnOn.classList = 'on';
    carOnOf.appendChild(btnOn);
    btnOn.innerHTML = 'On';

    var gearsDisplay = document.createElement('div');
    gearsDisplay.classList = 'numberGears';
    carInfo.append(gearsDisplay);
    var carGears = document.createElement('p');
    carGears.classList = 'numberGearsText';
    gearsDisplay.appendChild(carGears);
    carGears.innerHTML = 0;

   var carFuel = document.createElement('div');
    carFuel.classList = 'carFuel';
    car.append(carFuel);

    var carFuelInfo = document.createElement('p');
    carFuelInfo.classList = 'carFuelInfo';
    carFuel.appendChild(carFuelInfo);

    var carFuelBackground = document.createElement('div');
    carFuelBackground.classList = 'carFuelBackground';
    carFuelBackground.innerHTML = 'Car Fuel Left';
    carFuel.appendChild(carFuelBackground);

   
   
   
    

  
    this.initial = function () {
        drawInterface();
       
    };
    this.services = {
        prefix: '1',
    };

    //metods
    this.getInfo = function () {
        return 'model: ' + this.model + '<br>' +
               'color: ' + this.color + '<br>' +
               'mark: ' + this.mark + '<br>' +
               'number of gears: ' + this.gears + '<br>' +
               'maxspeed: ' + this.maxspeed;
       

    }
    carInfoData.innerHTML = this.getInfo();
    this.fuelInfo = function () {
        return 'Supply of fuel: ' + this.fuel + '<br>' +
               'Consumpt of fuel: ' + this.consumpt;
    }
    carFuelInfo.innerHTML = this.fuelInfo();
    this.setConsumpt=function()
    {
        this.consumpt = consumpt;
    }
   this.speedUp= function() {

        var maxSpeed = 160;
        this.speed++;
        if (maxSpeed < this.speed) {
            this.speed = maxSpeed;
        }
        return this.speed;
    }

    this.speedDown=function () {
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
        this.speed = 0;
        carGears.innerHTML = 0;
        speedBtnUp.style.display = "none";
        speedBtnDown.style.display = "none";
    }

    this.on = function () {
        carStatus.style.display = 'block';
        carStatus.innerHTML = 'The car is driving';
        function engineOn() {
            carStatus.style.display = 'none';

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
            this.setConsumpt(8.4);
            carFuel.innerHTML = this.fuelInfo();
        }
        else if (carGears.innerHTML == 2) {
            this.setConsumpt(7.2);
            carFuel.innerHTML = this.fuelInfo();
        }
        else if (carGears.innerHTML == 3) {
            this.setConsumpt(6.3);
            carFuel.innerHTML = this.fuelInfo();
        }
        else if (carGears.innerHTML == 4) {
            this.setConsumpt(5.4);
            carFuel.innerHTML = this.fuelInfo();
        }
        else if (carGears.innerHTML == 5) {
            this.setConsumpt(4.5);
            carFuel.innerHTML = this.fuelInfo();
        }
    }

    this.tankVolume = function () {
        {
            var timerId = setInterval(function () {
                that.fuel -= 1;
                if (that.fuel == -1) {
                    clearInterval(timerId);
                    alert('TankVolume is empty')
                    that.fuel = 0;
                }
            }, 100);
        }
    }
 

    var counter = 0;
    var speedUp;
    speedBtnUp.onmousedown = function () {
       
        speedUp = setInterval(function () {
            counter++;
            that.gearsSwitchOn();
            that.consumptFuel();
            that.speed = that.speedUp();
            console.log('dsfs');

        }, 100);
    }
    speedBtnUp.onmouseup = function () {
        clearInterval(speedUp);
    }

    var speedDown;
    speedBtnDown.onmousedown = function () {
        speedDown = setInterval(function () {
            counter--;
            this.speed= that.speedDown();
            that.gearsSwitchOff();

        }, 100);
        that.consumptFuel();
    }
    speedBtnDown.onmouseup = function () {
        clearInterval(speedDown);
    }

    btnOff.onclick = function () {
        that.off();
    }

    btnOn.onclick = function () {
        that.tankVolume();
        that.on();
    }

    function drawInterface() {
        var dataCarBlock = '',
            fuelCarBlock = '';
        var carBlock = document.createElement('section');
        carBlock.id = that.services.prefix + 'car';
        carBlock.classList.add('carBlock');
        document.body.insertBefore(carBlock, document.querySelector('#mainJs'));
        carBlock.innerHTML =
         '<div class="carConstr">' + '<div class="carInfo1">' + '<p class="carInfoData">' + '</p>' + '<p class="carStatus">' + '</p>' + '</div>' +
        ' <div class="carInfo">' + '<p class="carInfoSpeed">' + that.speed + '</p>' +
        '<div class="carInfoBtns">' + '<button class="carInfoBtnUp">' + 'SpeedUp' + '<button class="carInfoBtnDown">' + 'SpeedDown' +
        '</div>' + '<div class="carDisplay">' + '<button class="on">' + 'On' + '<button class="off">' + 'Off' + '</div>' +
        '<div class="numberGears">' + '<p class="numberGearsText">' + that.gears + '</p>' + '</div>' + '</div>' 
        + '<div class="carFuel">' + '<p class="carFuelInfo">' + '</p>' + '<div class="carFuelBackground">' + '<p class="carFuelIndicator">' + 'Car fuel left' + '</p>' + '</div>' + '</div>'+ '</div>'

        dataCarBlock = carBlock.querySelector('.carInfo1');
        fuelCarBlock = carBlock.querySelector('.carFuelInfo')
        dataCarBlock.innerHTML = that.getInfo();
        fuelCarBlock.innerHTML = that.fuelInfo();
    }
};
var newCar = new Car();
newCar.initial();




function User(name, age) {
    var name = name;
    var userAge = age;

    this.showUserInfo = function () {
        console.log(name);
        console.log(age);
    }

    this.getUserAge = function () {
        return userAge;
    }
    this.setUserAge = function (age) {
        userAge = parseFloat(age);
        if (isNaN(userAge)) {
            console.log('incorect value');
        }
    }

}
var user1 = new User('Vasiy', 30);
console.log(user1.getUserAge());
user1.setUserAge('');
