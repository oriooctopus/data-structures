
var Stack = function() {
  var myStack = Object.create(stackMethods);
  myStack.storage = {};
  myStack.count = 0;
  return myStack;
};

var stackMethods = {};

stackMethods.push = function(item) {
  this.count++;
  this.storage[this.count] = item;
}

stackMethods.pop = function() {
  if (this.count === 0) {
  	return this.count
  }
  this.count--;
  return this.storage[this.count + 1];
}

stackMethods.size = function() {
  return this.count;
}

var stack = Stack(); 
console.log(stack);


