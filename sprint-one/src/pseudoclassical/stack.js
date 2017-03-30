var Stack = function() {
  this.storage = {};
  this.count = 0;
};

var stackMethods = {};

Stack.prototype.push = function(item) {
  this.count++;
  this.storage[this.count] = item;
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
  	return this.count
  }
  this.count--;
  return this.storage[this.count + 1];
}

Stack.prototype.size = function() {
  return this.count;
}

var Stack1 = new Stack(); 
console.log(stack);



