var push = module.exports = exports = function(array, item) {
  array[array.length + 1] = item;
  return array.length;
};