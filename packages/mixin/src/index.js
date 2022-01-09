import Dog from "./Dog.js";
import dogFunctionalityMixin from './mixins/dogFunctionalityMixin.js';

const dog = new Dog('Daisy');

Object.assign(Dog.prototype, dogFunctionalityMixin);

console.log(dog.name); // Daisy
dog.play(); // Playing!
dog.wagTail(); // Wagging tail!
dog.bark(); // Woof!

dog.walk(); // Walking!
dog.sleep(); // Sleeping!

