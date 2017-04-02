/*
 * Complexity: What is the time complexity of the above functions?
 */


var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._tuplesCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  } 
  this._tuplesCount++;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  if (this._tuplesCount > (this._limit * .75)) {
    this._storage = this.grow();
    this._limit = this._limit * 2;
  }
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
    this._tuplesCount--;
    if (this._tuplesCount < (this._limit * .25)) {
      this._storage = this.grow();
      this._limit = this._limit / 2;
    }
  }
};

HashTable.prototype.grow = function() {
  var limit = this._limit * 2;
  var newHash = new HashTable(limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = this._storage.get(i);
    if (bucket !== undefined) {
      for (var a = 0; a < bucket.length; a++) {
        var index = getIndexBelowMaxForKey(bucket[a][0], limit);
        newHash.insert(bucket[a][0], bucket[a][1]);
      }
    }
  }
  return newHash._storage;
}
