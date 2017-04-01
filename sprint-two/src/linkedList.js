var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null || this.head === null) {
      this.tail = Node(value);
      this.head = this.tail;
    } else if (this.tail === this.head) {
      this.tail = Node(value);
      this.tail.prev = this.head;
      this.head.next = this.tail;
    } else {
      var temp = this.tail;
      this.tail = Node(value);
      this.tail.prev = temp; 
      temp.next = this.tail;
    }
  };
  list.removeTail = function() {
    var temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return temp;
  };
  
  list.addToHead = function(value) {
    if (this.head === null || this.tail === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.head.prev = Node(value);
      this.head.prev.next = this.head;
      this.head = this.head.prev;
    }
  };

  list.removeHead = function() {
    var temp = this.head.value;
    this.head = this.head.next;
    return temp;
  };

  list.contains = function(target) {
    var current = this.head;
    while (true) {
      if (current.value === target) {
        return true;
      } else if (current.next === null) {
        return false;
      } else {
        current = current.next;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
