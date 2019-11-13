const { Stack } = require('../stacksAndQueues/stacks-and-queues');


module.exports = (graph) => {


  const first = graph.getGraph()[0][0];

  const visited = new Map();
  const visitList = new Stack();

  const result = [];

  visitList.push(first);

  while(visitList.top !== null) {
    const node = visitList.pop();
    if(node && !visited.has(node)) {
      result.push(node.value);
      visited.set(node);
      if(graph.getNeighbors(node)){
        graph.getNeighbors(node).forEach(neighbor => visitList.push(neighbor.node));
      }
    }
  }
  return result;
};


