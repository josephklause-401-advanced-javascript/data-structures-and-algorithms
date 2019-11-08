class Node {
  constructor(value) {
    this.value = value;
    this.adjcacents = [];
  }
}

class Graph {
  constructor() {
    this.edges = {};
    this.nodes = [];
    this.size = 1;
  }
  
  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
    this.size++;
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  getNodes() {
    return this.nodes;
  }

  getNeighbors(node) {
    return this.edges[node];
  }
}

module.exports = {
  Graph,
  Node,
};