var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
  	var hasValue = this.children[i].value === target;
  	var childrenHasValue = this.children[i].contains(target);
  	if (hasValue || childrenHasValue) {
  	  return true;
  	} 
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
