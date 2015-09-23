// var chai = require('chai');  // uncomment to test in node
var expect = chai.expect;

describe('Sum of Square Root Test', function() {
  it("For numbers up to 9, sum of square root = 19.306", function() {
    expect(Math.round(sumRoot(9) * 1000) / 1000).to.equal(19.306);
  });
});