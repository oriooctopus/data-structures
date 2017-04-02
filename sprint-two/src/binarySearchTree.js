var BinarySearchTree = function(value) {
  var node = Object.create(binarySearchMethods);
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

var binarySearchMethods = {};

binarySearchMethods.
  var currentVal = this;
  while (true) {
    if (currentVal.value === valWanted) {
      return true;
    } else if (currentVal.value > valWanted && currentVal.left !== null) {
      currentVal = this.left;
    } else if (currentVal.value < valWanted && currentVal.right !== null) {
      currentVal = this.right;
    } else {
      return false;
    }
  }
};

binarySearchMethods.insert = function(newVal) {
  var currentVal = this;
  while (true) {
    if (newVal < currentVal.value) {  	  
      if (currentVal.left === null) {
        currentVal.left = BinarySearchTree(newVal);
        break;
      } else {
        currentVal = currentVal.left;
      }
    } else {
      if (currentVal.right === null) {
        currentVal.right = BinarySearchTree(newVal);
        break;
      } else {
        currentVal = currentVal.right;
      }
    }
  }
};
 
binarySearchMethods.depthFirstLog = function(cb) {
  var currentNode = this;
  var checkNodeAndCallChildren = function(node) {
    cb(node.value);
    if (node.left !== null) {
      currentNode = currentNode.left;
      checkNodeAndCallChildren(currentNode);
    } 
    if (node.right !== null) {
      currentNode = currentNode.right;
      checkNodeAndCallChildren(currentNode);
    }
  };
  checkNodeAndCallChildren(currentNode);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



// binarySearchMethods.shuffle(values) {
//   // value is the midpoints
//   // if there are things to the left
//   	// left equals an object that is returned by binarySearchMethods(leftHalf)
//   	// right equals an object that is returned by binarySearchMetho[1]//   // return the object
// }
