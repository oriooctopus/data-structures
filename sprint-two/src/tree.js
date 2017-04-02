var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  newTree.parent = null;
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
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
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

treeMethods.removeFromParent = function(target) {
  var indexInParent = this.parent.children.indexOf(this);
  var firstHalf = this.parent.children.slice(0, indexInParent);
  var secondHalf = this.parent.children.slice(indexInParent + 1, this.parent.children.length);
  this.parent.children = firstHalf.concat(secondHalf);
  this.parent = null;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
