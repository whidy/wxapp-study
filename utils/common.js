// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
module.exports.sayGoodbye = sayGoodbye
exports = (name) => {
  console.log(`Hello ${name} again`);
}
exports.sayGoodbye = sayGoodbye