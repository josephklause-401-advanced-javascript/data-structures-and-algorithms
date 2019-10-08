const BinarySearchTree = require('../tree');

describe('binary tree', () => {
  
  it('traverses in preOrder', () => {
    const binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(6);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(1);
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(9);
    binarySearchTree.add(8);

    const result = binarySearchTree.preOrder();
    expect(result).toEqual([6, 2, 1, 4, 3, 5, 7, 9, 8]);
  });

  it('traverses in inOrder', () => {
    const binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(6);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(1);
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(9);
    binarySearchTree.add(8);

    const result = binarySearchTree.inOrder();
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('traverses in postOrder', () => {
    const binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(6);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(1);
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(9);
    binarySearchTree.add(8);

    const result = binarySearchTree.postOrder();
    expect(result).toEqual([1, 3, 5, 4, 2, 8, 9, 7, 6]);
  });

  it('returns false if searching an empty tree', () => {
    const binarySearchTree = new BinarySearchTree;
    const result = binarySearchTree.contains(binarySearchTree.root, 1);
    expect(result).toBe(false);
  });

  it('returns false if searching a tree for value that does not exist', () => {
    const binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(6);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(1);
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(9);
    binarySearchTree.add(8);
    const result1 = binarySearchTree.contains(binarySearchTree.root, 5);
    expect(result1).toBe(false);
    const result2 = binarySearchTree.contains(binarySearchTree.root, 10);
    expect(result2).toBe(false);
  });

  it('returns true if searching a tree for value that exists', () => {
    const binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(6);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(1);
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(9);
    binarySearchTree.add(8);
    const result1 = binarySearchTree.contains(binarySearchTree.root, 6);
    expect(result1).toBe(true);
    const result2 = binarySearchTree.contains(binarySearchTree.root, 4);
    expect(result2).toBe(true);
  });


});