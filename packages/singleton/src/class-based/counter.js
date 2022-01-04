let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error('Instance has been already created');
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        ++counter;
    }

    decrement() {
        --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;