var expect = require('chai').expect;
var frequency2 = require(__dirname + '/../frequency2');

describe('frequency2', function() {
  it('should return an array of the greatest frequency letters', function() {
    var array = ['car', 'tool', 'cat', 'tar'];
    expect(frequency2(array)).to.eql(['t', 'a']);
  });
});