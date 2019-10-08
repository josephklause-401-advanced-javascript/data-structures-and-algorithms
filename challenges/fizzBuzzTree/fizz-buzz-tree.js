class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    } 
  }
  
  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder() {
    return inOrderHelper(this.root, []);
  }

  
}

function inOrderHelper(node, result) {
  if(node) {
    if(node.left) inOrderHelper(node.left, result);
    result.push(node.value);
    if(node.right) inOrderHelper(node.right, result);
  }
  return result;
}


const fizzBuzzTree = function(tree) {
  return fizzBuzzSearch(tree.root);

  function fizzBuzzSearch(node) {
    if(!node) {
      return tree;
    }
    else if(node.value % 15 === 0) {
      node.value = 'FizzBuzz';
    }
    else if(node.value % 5 === 0) {
      node.value = 'Buzz';
    }
    else if(node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    fizzBuzzSearch(node.left);
    fizzBuzzSearch(node.right);
    return tree;
  }
};

module.exports = { fizzBuzzTree, BinarySearchTree };