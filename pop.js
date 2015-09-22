var pop = module.exports = exports = function(array) {
  var item = array[array.length - 1];
  var newArray = [];
  for(var i = 0; i < array.length -1; i++) {
    newArray[i] = array[i];
  }
  array = newArray;
  return item;
};