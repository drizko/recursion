// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = new Array();

  function popClass(element) {
    var classArray = element.className === undefined ? [] : element.className.split(' ');

    for(var i = 0; i < classArray.length; i++){
      if (classArray[i] === className) {
        result.push(element);
      }
    }

    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      popClass(children[i]);
    }
  }

  popClass(document);
  return result;
};
