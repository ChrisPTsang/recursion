// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined || typeof(obj) === 'function') {
    return null;
  }
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number') {
    return obj.toString();
  }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    return '[' +
      obj.map(function(value) {
        return stringifyJSON(value);
      }).join(",") + ']';
  }
  if (typeof(obj) === 'object') {
    var result = [];
    for (var key in obj) {
      var value = stringifyJSON(obj[key]);
      if (value !== null) {
        result.push('"' + key + '"' + ":" + value);
      }
    }
    return "{" + result.join(",") + "}";
  }
};