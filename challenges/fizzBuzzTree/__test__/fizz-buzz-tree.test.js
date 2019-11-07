const { fizzBuzzTree, BinarySearchTree } = require('../fizz-buzz-tree');

describe('fizzBuzzTree', () => {
  it('changes values appropriately, and returns a modified tree', () => {
    const tree = new BinarySearchTree;
    tree.add(40);
    tree.add(30);
    tree.add(60);
    tree.add(27);
    tree.add(28);
    tree.add(72);
    tree.add(53);
    tree.add(3);

    const result = fizzBuzzTree(tree);
    expect(result.root.value).toBe('Buzz');
    expect(result.root.left.value).toBe('FizzBuzz');
    expect(result.root.left.left.value).toBe('Fizz');
    expect(result.root.left.left.right.value).toBe(28);
    expect(result.root.left.left.left.value).toBe('Fizz');
    expect(result.root.right.value).toBe('FizzBuzz');
    expect(result.root.right.right.value).toBe('Fizz');
    expect(result.root.right.left.value).toBe(53);
  });

  it('returns an unmodified tree if no values are divisible', () => {
    const tree = new BinarySearchTree;
    tree.add(17);
    tree.add(22);
    tree.add(1);
    tree.add(14);
    tree.add(37);
    tree.add(19);
    tree.add(4);
    tree.add(2);

    const result = fizzBuzzTree(tree);
    expect(result).toEqual(tree);
  });

});