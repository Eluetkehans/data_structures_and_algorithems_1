var shift = module.exports = exports = function(array) {
  var item = array[0];
  var newArray = [];
  for(var i = 1; i < array.length; i++) {
    newArray[i -1] = array[i];
  }
  array = newArray;
  return item;
};