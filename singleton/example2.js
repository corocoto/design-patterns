let instance = null;
function User(name, age) {
    if (instance) {
        return instance
    }
    instance = this;
    this.name = name;
    this.age = age;
    return instance;
}

const User1 = new User('Mark', 24);
const User2 = new User('Peter', 25);
console.log(User1 === User2);