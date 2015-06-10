// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [],
    element = document.body;

  traverse(element);

  function traverse(node) {
    var children = node.children;

    if (node.classList.contains(className)) {
      result.push(node);
    }

    for (var i = 0; i < children.length; i++) {
      traverse(children[i]);
    }
  }
  return result;
};