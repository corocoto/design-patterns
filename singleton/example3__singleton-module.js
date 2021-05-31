const singleton = (function () {
    let instance = null;

    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    return {
        getInstance: function (name, age) {
            if (!instance) {
                instance = new User(name, age);
            }
            return instance
        }
    }
})();

const user1 = singleton.getInstance('Peter', 24);
const user2 = singleton.getInstance('Mark', 25);

console.log(user1 === user2);