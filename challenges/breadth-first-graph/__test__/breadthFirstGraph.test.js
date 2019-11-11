const { Graph, Node } = require('../breadthFirstGraph');

describe('breadth first traversal of graph class', ()=> {
  it('A collection of all nodes can be properly retrieved from the graph', ()=> {
    const graph = new Graph();
    const node1 = new Node('A');
    const node2 = new Node('B');
    const node3 = new Node('C');
    const node4 = new Node('D');
    const node5 = new Node('E');
    graph.addNode(node1);
    graph.addNode(node2);
    graph.addNode(node3);
    graph.addNode(node4);
    graph.addNode(node5);
    graph.addEdge(node1, node2);
    graph.addEdge(node2, node3);
    graph.addEdge(node3, node4);
    graph.addEdge(node3, node5);
    graph.addEdge(node2, node5);
    graph.addEdge(node1, node5);
    expect(graph.breadthFirst(node1)).toEqual(['A', 'B', 'E', 'C', 'D']);
  });

});