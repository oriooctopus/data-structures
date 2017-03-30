var Queue = function() {
  var myStack = Object.create(queueMethods);
  myStack.storage = {};
  myStack.count = 0;
  return myStack;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value; 
}

queueMethods.dequeue = function() {
  if (this.count === 0) {
  	return 'Too Small';
  } else {
    var temp = this.storage[1];
  	for (var i = 1; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.count];
    this.count--;
    return temp;
  }
}

queueMethods.size = function() {
  return this.count;
}

