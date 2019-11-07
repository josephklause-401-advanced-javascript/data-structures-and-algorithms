function treeIntersection(tree1, tree2) {

  return tree1
    .preOrder()
    .reduce((acc, value) => {
      if(tree2.contains(tree2.root, value)) acc.push(value);
      return acc;
    }, []);

}

module.exports = {
  treeIntersection
};
