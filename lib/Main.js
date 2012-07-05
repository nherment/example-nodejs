function foobar() {
  console.log("This code is never going to be covered by unit tests")
}

function init() {
  console.log("This sentence should be the first of three")
  console.error("This one the second of the three")
  console.info("And this one the last of all three")
}

new Object() // jshint violation right there
new Object() // jshint violation right there
new Object() // jshint violation right there


init()

module.exports = function() { return "Hello World" }

