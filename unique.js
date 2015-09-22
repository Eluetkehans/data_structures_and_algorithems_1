var unique = module.exports = exports = function(array) {
  seen = {};
  newArray = [];
  count = 0;
  for (var i = 0 ; i < array.length; i++) {
    if (!seen[array[i]]) {
      seen[array[i]] = true;
      newArray[count] = array[i];
      count++;
    }
  }
  return newArray;
};