import Dog from './Dog.js';

const dog1 = new Dog('Pluto');
const dog2 = new Dog('Maxi');
const dog3 = new Dog('Spot');

Dog.prototype.play = () => console.log('Playing now!');

dog1.play();