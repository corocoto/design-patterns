const person = {
    name: "John Doe",
    age: 42,
    nationality: 'american'
};

const personProxy = new Proxy(person, {
    get: (object, prop) => {
        if (!object[prop]) {
            console.log(`Hmm.. this property doesn't seem to exist on the target object`);
        } else {
            console.log(`The value of ${prop} is ${Reflect.get(object,prop)}`);
        }
    },
    set: (object, prop, value) => {
        if (prop === "age" && typeof value !== "number") {
            console.log(`Sorry, you can only pass numeric values for age.`);
        } else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        } else {
            console.log(`Changed ${prop} from ${Reflect.get(object, prop)} to ${value}`);
            Reflect.set(object, prop, value);
        }
        return true;
    }
});

personProxy.name;
personProxy.age = 23;

personProxy.nonExistProperty;
personProxy.age = "44";
personProxy.name = "";