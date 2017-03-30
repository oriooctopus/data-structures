var Stack = function() {
  var myStack = {};
  myStack.storage = {};
  myStack.count = 0;
  extend(myStack, stackMethods);
  return myStack;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

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