const { Graph, Node } = require('../../breadth-first-graph/breadthFirstGraph');
const depthFirst = require('../depthFirst');

describe('breadth first traversal of graph class', ()=> {
  it('A collection of all nodes can be properly retrieved from the graph', ()=> {
    const graph = new Graph();
    const nodeA = new Node('A');
    const nodeB = new Node('B');
    const nodeC = new Node('C');
    const nodeD = new Node('D');
    const nodeE = new Node('E');
    const nodeF = new Node('F');
    const nodeG = new Node('G');
    const nodeH = new Node('H');
    graph.addNode(nodeA);
    graph.addNode(nodeB);
    graph.addNode(nodeC);
    graph.addNode(nodeD);
    graph.addNode(nodeE);
    graph.addNode(nodeF);
    graph.addNode(nodeG);
    graph.addNode(nodeH);
    graph.addEdge(nodeA, nodeB);
    graph.addEdge(nodeA, nodeD);
    graph.addEdge(nodeB, nodeC);
    graph.addEdge(nodeB, nodeD);
    graph.addEdge(nodeC, nodeG);
    graph.addEdge(nodeD, nodeF);
    graph.addEdge(nodeD, nodeH);
    graph.addEdge(nodeD, nodeE);
    graph.addEdge(nodeF, nodeH);
    expect(depthFirst(graph)).toEqual(['A', 'D', 'E', 'H', 'F', 'B', 'C', 'G']);
  });

});