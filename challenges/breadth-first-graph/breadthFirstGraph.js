const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
    this.size = 0;
  }
  
  addNode(node) {
    this.adjList.set(node, []);
    this.size++;
  }

  addEdge(node1, node2, weight = 1) {
    if(!node2) this.adjList.get(node1).push({ node: node1, weight: weight });
    else {
      this.adjList.get(node1).push({ node: node2, weight: weight });
      this.adjList.get(node2).push({ node: node1, weight: weight });
    }
  }

  getNodes() {
    return Array.from(this.adjList.keys());
  }

  getNeighbors(node) {
    return this.adjList.get(node);
  }

  getGraph() {
    if(this.size === 0) return null;
    return Array.from(this.adjList);
  }

  breadthFirst(first) {
    const visited = new Map();
    const visitList = new Queue();

    const result = [];
    visitList.enqueue(first);
    while(visitList.front !== null) {
      const node = visitList.dequeue();
      if(node && !visited.has(node)) {
        result.push(node.value);
        visited.set(node);
        if(this.getNeighbors(node)){
          this.getNeighbors(node).forEach(neighbor => visitList.enqueue(neighbor.node));
        }
      }
    }
    return result;
  }

  breadthFirstConnection() {

  }
}

module.exports = {
  Graph,
  Node,
};