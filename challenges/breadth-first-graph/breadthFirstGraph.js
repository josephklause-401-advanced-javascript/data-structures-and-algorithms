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
    this.adjList.set(node.value, []);
    this.size++;
  }

  addEdge(node1, node2, weight = 1) {
    if(!node2) this.adjList.get(node1.value).push({ node: node1.value, weight: weight });
    else {
      this.adjList.get(node1.value).push({ node: node2.value, weight: weight });
      this.adjList.get(node2.value).push({ node: node1.value, weight: weight });
    }
  }

  getNodes() {
    return Array.from(this.adjList.keys());
  }

  getNeighbors(node) {
    return this.adjList.get(node.value);
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

    while(visitList.front === null) {
      const node = visitList.dequeue();
      if(node && !visited.has(node)) {
        result.push(node);
        visited.set(node);
        node.getNeighbors().forEach(neighbor => visitList.add(neighbor));
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