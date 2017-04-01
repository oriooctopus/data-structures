var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var index = this.storage.indexOf(item);
    var firstHalf = this.storage.slice(0, index);
    var secondHalf = this.storage.slice(index + 1, this.storage.length);
    this.storage = firstHalf.concat(secondHalf);
    return true;
  } else {
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
