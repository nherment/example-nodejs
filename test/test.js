var f = require("../index.js")

var should = require("should")

describe("When testing", function() {

  it("a hello world", function() {

    f().should.equal("Hello World")

  })


	it("a dummy assert", function() {
        should.be.ok(true)
    }
})
