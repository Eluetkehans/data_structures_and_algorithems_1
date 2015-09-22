var expect = require('chai').expect;
var pop = require(__dirname + '/../pop');
var push = require(__dirname + '/../push');
var shift = require(__dirname + '/../shift');
var unshift = require(__dirname + '/../unshift');

describe('array methods', function() {
  
  describe('pop', function() {
    var array = ['1', '2', '3'];
    it('should return the last item of an array', function() {
      expect(pop(array)).to.eql('3');
    });
  });

  describe('push', function() {
    var array = ['1', '2', '3'];
    it('should return the length of the new array', function() {
      expect(push(array, '4')).to.eql(4);
    });
  });

  describe('shift', function() {
    var array = ['1', '2', '3'];
    it('should return the first item of an array', function() {
      expect(shift(array)).to.eql('1');
    });
  });

  describe('unshift', function() {
    var array = ['1', '2', '3'];
    it('should return the length of a new array', function() {
      expect(unshift(array, '0')).to.eql(4);
    });
  });
});