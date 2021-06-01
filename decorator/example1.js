function Car(name) {
    this.name = name;
    this.color = 'white';
}

// Создание нового объекта, который планируется декорировать
const tesla = new Car('Tesla Model 3');

// Декорирование объекта - добавление нового функционала
tesla.setColor = function (color) {
    this.color = color;
};
tesla.setPrice = function (price) {
    this.price = price;
}

tesla.setColor('black');
tesla.setPrice(49000);

console.log(tesla);