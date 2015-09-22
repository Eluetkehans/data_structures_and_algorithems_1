var expect = require('chai').expect;
var unique = require(__dirname + '/../unique');

describe('unique', function() {
  it('should return a duplicatless array', function() {
    var array = ['dup', 'nondup', 'dup', 'redup', 'redup'];
    expect(unique(array)).to.eql(['dup', 'nondup', 'redup']);
  });
});