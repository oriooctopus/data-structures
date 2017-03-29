var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
    return value;
  };

  someInstance.pop = function() {
    if (count > 0) {
      var popped = storage[count];
      delete storage[count];
      count--;
      return popped;
    } else {
      return 'Error, too small';
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
