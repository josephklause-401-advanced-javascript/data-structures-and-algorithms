function getEdges(graph, cityArray) {

  let result = 0;

  const graphList = graph.getGraph();

  for(let i = 0; i < cityArray.length - 1; i++) {

    const startingNode = graphList.reduce((acc, node) => {
      if(node[0].value === cityArray[i]) {
        acc.push(node);
      }
      return acc;
    }, []);
    if(!startingNode) break;

    const connections = startingNode[0][1];
    if(!connections) break;
    
    result += connections.reduce((acc, connection) => {
      if(connection.node.value === cityArray[i + 1]) {
        acc += connection.weight; 
      }
      return acc;
    }, 0);
  }
 
  if(result > 0) return `True, $${result}`;
  else return `False, $${result}`;
}




module.exports = {
  getEdges
};