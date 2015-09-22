var unshift = module.exports = exports = function(array, item) {
  newArray = [item];
  for (var i = 0; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  array = newArray;
  return array.length;
};