var f = require("../index.js")

var should = require("should")

describe("When testing", function() {

  it("a hello world", function() {

    f().should.equal("Hello World")
  })


  it("a dummy assert", function() {
    should.ok(true)
  })

  it("that an error is thrown", function() {
    throw new Error("You should see that")
  })

  it("an async timeout", function(done) {
    setTimeout(function() {
      done()
    }, 200)
  })
  it("mocha should timeout", function(done) {
    setTimeout(function() {
      done()
    }, 2010)
  })

})
