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

  contains(node, value) {
    if(node === null) {
      return false;
    }
    else if(value < node.value) {
      return this.contains(node.left, value);
    } else if(value > node.value) {
      return this.contains(node.right, value);
    }
    return true;
  }

  preOrder() {
    return preOrderHelper(this.root, []);
  }
    
  inOrder() {
    return inOrderHelper(this.root, []);
  }

  postOrder() {
    return postOrderHelper(this.root, []);
  }
  
  breadthFirst() {
    let node = this.root;
    const queue = [node];
    const result = [];
    while(queue.length) {
      node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
      result.push(node.value);
    }
    return result;
  }

  findMaximumValue() {
    return findMaxHelper(this.root);
  }

  findMaxValueBinaryStyle() {
    return findMaxValueBinaryStyleHelper(this.root);
  }
}

function findMaxValueBinaryStyleHelper(node) {
  if(node.right === null) {
    return node.value;
  } 
  if(node.right) return findMaxValueBinaryStyleHelper(node.right);
}

function findMaxHelper(node) {
  let maxLeft;
  let maxRight;
  if(node.left) {
    maxLeft = findMaxHelper(node.left);
  } else {
    maxLeft = node.value;
  }
  if(node.right) {
    maxRight = findMaxHelper(node.right);
  } else {
    maxRight = node.value;
  }
  if(maxLeft > maxRight && maxLeft > node.value) {
    return maxLeft;
  } else if(maxRight > maxLeft && maxRight > node.value) {
    return maxRight;
  } 
  return node.value;
}

function preOrderHelper(node, result) {
  if(node) {
    result.push(node.value);
    if(node.left) preOrderHelper(node.left, result);
    if(node.right) preOrderHelper(node.right, result);
  }
  return result;
}

function inOrderHelper(node, result) {
  if(node) {
    if(node.left) inOrderHelper(node.left, result);
    result.push(node.value);
    if(node.right) inOrderHelper(node.right, result);
  }
  return result;
}

function postOrderHelper(node, result) {

  if(node) {
    if(node.left) postOrderHelper(node.left, result);
    if(node.right) postOrderHelper(node.right, result);
    result.push(node.value);
  }
  return result;
}

module.exports = BinarySearchTree;