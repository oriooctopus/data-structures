var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null || this.head === null) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      var temp = this.tail;
      this.tail = Node(value);
      temp.next = this.tail;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
