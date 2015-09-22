var push = module.exports = exports = function(array, item) {
  array[array.length] = item;
  return array.length;
};