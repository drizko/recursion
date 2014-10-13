// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  function stringify(element) {
    if (element instanceof Array) {
      var elemArray = [];
      for (var i = 0; i < element.length; i++) {
        elemArray.push(stringify(element[i]));
      }
      result = '[' + elemArray.join(',') + ']';
    } else if ((element !== null) && (element.constructor === Object)) {
      var objArray = [];
      for (var key in element) {
        var k = '"' + key + '":';
        if (element[key] === undefined) {
          result = '{}';
          return;
        }
        var v = stringify(element[key]);
        objArray.push(k + v);
      }
      result = '{' + objArray.join(',') + '}';
    } else {
      result = typeof element === 'string' ? '"' + element + '"' : '' + element + '';
    }
    return result;
  }

  stringify(obj);
  return result;
};
