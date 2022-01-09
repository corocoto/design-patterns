import animalFunctionalityMixin from "./animalFunctionalityMixin.js";

const dogFunctionalityMixin = {
    __proto__: animalFunctionalityMixin,
    bark() {
        console.log('Woof!');
    },
    wagTail() {
      console.log('Wagging tail!');
    },
    play() {
        console.log('Playing!');
    },
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
};

debugger;
export default dogFunctionalityMixin;