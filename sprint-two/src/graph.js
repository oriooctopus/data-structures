

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
  	if (this.nodes[key].value === node) {
  	  return true;
  	}
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove the node itself
  // remove the edges of the node in all other nodes
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromHasTo = this.nodes[fromNode].edges.includes(toNode);
  var toHasFrom = this.nodes[toNode].edges.includes(fromNode);
  return (fromHasTo && toHasFrom);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.nodes[fromNode].edges.includes(fromNode)) {
    this.nodes[fromNode].edges.push(toNode);
  } 
  if (!this.nodes[toNode].edges.includes(toNode)) {
    this.nodes[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





// // Instantiate a new graph
// var Graph = function() {
//   this.nodes = {};
// };

// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   var newNode = {};
//   newNode.value = node;
//   newNode.edges = [];
//   this.nodes.push(newNode);
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   for (var i = 0; i < this.nodes.length; i++) {
//   	if (node === this.nodes[i].value) {
//   	  return true;
//   	}
//   }
//   return false;
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
  
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {

// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   // if the edge for fromNode does not already exist
//   if (this.nodes)


//   // if the edge fro toNode does not exist


// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */


