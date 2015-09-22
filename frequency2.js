var frequency2 = module.exports = exports = function(array) {
  string = array.join('');
  letterFrequency = {'_': 0};
  max = ['_'];
  for(var i = 0; i < string.length; i++) {
    if(!letterFrequency[string[i]]) {
      letterFrequency[string[i]] = 0;
    }
    letterFrequency[string[i]]++;
    if(letterFrequency[string[i]] === letterFrequency[max[0]] &&
       string[i] !== max[0]) {
      max.push(string[i]);
    }
    if(letterFrequency[string[i]] > letterFrequency[max[0]]) {
      max = [string[i]];
    }
  }
  return max;
};