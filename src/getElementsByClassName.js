// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [],
    element = document.body;

  if (element.classList.contains(className)) {
    result.push(element);
  }

  traverse(element);

  function traverse(node) {
    var children = node.children;

    for (var i = 0; i < children.length; i++) {
      if (children[i].hasChildNodes()) {
        traverse(children[i]);
      }
      if (children[i].classList.contains(className)) {
        result.push(children[i]);
      }
    }
  }

  return result;

};