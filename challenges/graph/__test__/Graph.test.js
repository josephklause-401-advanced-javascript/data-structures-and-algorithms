const { Graph, Node } = require('../Graph');


describe('graph class', ()=> {
  it('successfully adds a node to the graph', ()=> {
    const graph = new Graph();
    const node = new Node('A');
    graph.addNode(node);
    expect(graph.adjList.get(node.value)).toEqual([]);

  });
  it('An edge can be successfully added to the graph', ()=> {
    const graph = new Graph();
    const node1 = new Node('A');
    const node2 = new Node('B');
    graph.addNode(node1);
    graph.addNode(node2);
    graph.addEdge(node1, node2);
    expect(graph.adjList.get(node1.value)).toEqual([{ 'node': 'B', 'weight': 1 }]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', ()=> {
    const graph = new Graph();
    const node1 = new Node('A');
    const node2 = new Node('B');
    const node3 = new Node('C');
    graph.addNode(node1);
    graph.addNode(node2);
    graph.addNode(node3);
    expect(graph.getNodes()).toEqual(['A', 'B', 'C']);
  });
  it('All appropriate neighbors can be retrieved from the graph, with weight returned as well', ()=> {
    const graph = new Graph();
    const node1 = new Node('A');
    const node2 = new Node('B');
    graph.addNode(node1);
    graph.addNode(node2);
    graph.addEdge(node1, node2);
    expect(graph.getNeighbors(node1)).toEqual([{ 'node': 'B', 'weight': 1 }]);
  });
  it('The proper size is returned, representing the number of nodes in the graph', ()=> {
    const graph = new Graph();
    const node1 = new Node('A');
    const node2 = new Node('B');
    graph.addNode(node1);
    graph.addNode(node2);
    expect(graph.size).toEqual(2);
  });
  it('A graph with only one node and edge can be properly returned', ()=> {
    const graph = new Graph();
    const node1 = new Node('A');
    graph.addNode(node1);
    graph.addEdge(node1);
    expect(graph.getGraph()).toEqual([['A', [{ 'node': 'A', 'weight': 1 }]]]);
  });
  it('An empty graph properly returns null', ()=> {
    const graph = new Graph();
    expect(graph.getGraph()).toBe(null);
  });
});