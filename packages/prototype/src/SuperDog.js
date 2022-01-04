import Dog from "./Dog.js";

export default class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        return "Flying";
    }
}