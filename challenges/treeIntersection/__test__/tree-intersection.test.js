const { treeIntersection } = require('../tree-interesection');
const BinarySearchTree = require('../../tree/tree');


describe('tree intersection', () => {
  
  it('outputs an array with values found in both trees', () => {
    const tree1 = new BinarySearchTree;
    tree1.add(6);
    tree1.add(2);
    tree1.add(7);
    tree1.add(1);

    const tree2 = new BinarySearchTree;
    tree2.add(4);
    tree2.add(2);
    tree2.add(9);
    tree2.add(1);

    expect(treeIntersection(tree1, tree2)).toEqual([2, 1]);
  });

  it('outputs an empty array if no values the same in both trees', () => {
    const tree1 = new BinarySearchTree;
    tree1.add(6);
    tree1.add(2);
    tree1.add(7);
    tree1.add(1);

    const tree2 = new BinarySearchTree;
    tree2.add(4);
    tree2.add(8);
    tree2.add(9);
    tree2.add(0);

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
