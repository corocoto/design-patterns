const myModule = (function () {
    const privateVariable = 'Hello world';

    function privateMethod() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function () {
            privateMethod();
        }
    }
})();

myModule.publicMethod();

