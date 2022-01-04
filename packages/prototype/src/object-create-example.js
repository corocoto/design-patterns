const dog = {
    bark() {
        console.log('Woof!');
    }
}

const pet1 = Object.create(dog);
pet1.bark();
console.log(`Direct properties on pet1: ${Object.keys(pet1)}`);
console.log(`Prototype properties from pet1 instance: ${Object.keys(pet1.__proto__)}`)