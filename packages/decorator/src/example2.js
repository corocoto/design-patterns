class Car {
    constructor() {
        // Базовая стоимость
        this.cost = function () {
            return 20000;
        };
    }
}

// Функция-декоратор
function carWithAC(car) {
    car.hasAC = true;
    const previousCost = car.cost();
    car.cost = function () {
        return previousCost + 500;
    };
}

// Функция-декоратор
function carWithAutoTransmission(car) {
    car.hasAutoTransmission = true;
    const previousCost = car.cost();
    car.cost = function () {
        return previousCost + 2000;
    }
}

// Функция-декоратор
function carWithPowerLocks(car) {
    car.hasPowerLocks = true;
    const previousCost = car.cost();
    car.cost = function () {
        return previousCost + 500;
    }
}

const car = new Car();
console.log(car.cost());
carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);

console.log(car.cost());
