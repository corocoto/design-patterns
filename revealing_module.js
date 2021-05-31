const myRevealingModule = (function () {
    let privateVar = 'Peter';
    const publicVar = 'Hello world';

    function privateFunction() {
        console.log(`Name: ${privateVar}`);
    }

    function publicSetName(name) {
        privateVar = name;
    }

    function publicGetName() {
        privateFunction();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();

myRevealingModule.setName('Mark');
myRevealingModule.getName();
console.log(myRevealingModule.greeting);