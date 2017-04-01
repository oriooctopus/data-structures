/*
 * Complexity: What is the time complexity of the above functions?
 */


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
  	this._storage.set(index, []);
  	bucket = this._storage.get(index);
  }
  for (var i = 0; i < bucket.length; i++) {
  	if (bucket[i][0] === k) {
  	  bucket[i][1] = v;
  	  return;
  	}
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
  	return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
  	if (bucket[i][0] === k) {
  	  return bucket[i][1];
  	}
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!(bucket === undefined)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
      	bucket = bucket.slice(0, i).concat(bucket.slice(i + 1, bucket.length));
      	this._storage.set(index, bucket);
      }
  	}
  }
};
