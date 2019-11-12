const { Graph, Node } = require('../../breadth-first-graph/breadthFirstGraph');
const { getEdges } = require('../getEdges');

describe('getEdges', ()=> {
  it('all edges can be returned with weight', ()=> {
    const graph = new Graph();
    const pandora = new Node('Pandora');
    const metroville = new Node('Metroville');
    const arendelle = new Node('Arendelle');
    const monstropolis = new Node('Monstropolis');
    const naboo = new Node('Naboo');
    const narnia = new Node('Narnia');
    graph.addNode(pandora);
    graph.addNode(metroville);
    graph.addNode(arendelle);
    graph.addNode(monstropolis);
    graph.addNode(naboo);
    graph.addNode(narnia);
    graph.addEdge(pandora, metroville, 82);
    graph.addEdge(pandora, arendelle, 150);
    graph.addEdge(metroville, arendelle, 99);
    graph.addEdge(metroville, monstropolis, 105);
    graph.addEdge(metroville, naboo, 26);
    graph.addEdge(metroville, narnia, 37);
    graph.addEdge(arendelle, monstropolis, 42);
    graph.addEdge(monstropolis, naboo, 73);
    graph.addEdge(naboo, narnia, 250);
    expect(getEdges(graph, ['Metroville', 'Pandora'])).toBe('True, $82');
    expect(getEdges(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toBe('True, $115');
    expect(getEdges(graph, ['Naboo', 'Pandora'])).toBe('False, $0');
    expect(getEdges(graph, ['Naboo', 'Pandora'])).toBe('False, $0');
  });
});