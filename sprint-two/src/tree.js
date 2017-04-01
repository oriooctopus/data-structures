var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
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

/*treeMethods.removeFromParent(target) {
  var currentEl = this;
  var investigateChildren = function(currentEl) {
    if (currentEl.value === target) {
      currentEl
    }
    for (var i = 0; currentEl.children.length; i++) {
      if (currentEl)
    }
  }
  investigateChildren(currentEl);


  var currentEl;
  while (true) {
    if (this.children[i].value === target) {
      this.children[i].parent = null;
      this.children = this.children.slice(0, i).concat(this.children.slice(i + 1, this.children.length));
    } else {
      thi
    }
  }
}*/



/*
 * Complexity: What is the time complexity of the above functions?
 */
