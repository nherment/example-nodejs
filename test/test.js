var f = require("../index.js")

var should = require("should")

describe("When testing", function() {

  it("a hello world", function() {

    //f().should.equal("Hello World")
    should.exist(true)

  })


  it("a dummy assert", function() {
    should.be.ok(true)
  })

  it("that an error is thrown", function() {
    //throw new Error("You should see that")
    should.exist(true)
  })

  it("an async timeout", function(done) {
    setTimeout(function() {
      done()
    }, 200)
  })
  it("mocha should timeout", function(done) {
    setTimeout(function() {
      done()
    }, 20)
  })

})
