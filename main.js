const sayHelloTo = require('./myModule');

console.log('sayHelloTo:', sayHelloTo);

sayHelloTo('Bernie');

module.exports = sayHelloTo;