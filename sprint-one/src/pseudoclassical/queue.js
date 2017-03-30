var Queue = function() {
  this.storage = {};
  this.count = 0;
};

var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value; 
}

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.count;
}


