class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let node = new Node(value);

    if(!this.front) {
      this.front = node;
      return;
    }
    let tailNode = this.front;

    while(tailNode.next !== null) {
      tailNode = tailNode.next;
    }
    tailNode.next = node;
  }

  dequeue() {
    let node = this.front;
    this.front = node.next;
    return node.value;
  }

  peek() {
    let node = this.front;
    return node.value;
  }
}

function eeneyMeeneyMineyMo(arr, int) {
  const game = new Queue;
  arr.forEach(string => {
    game.enqueue(string);
  });

  let node = game.front;
  while(node) {
    if(node.next === null) {
      node.next = game.front;
      break;
    }
  }

  node = game.front;
  while(node.value !== node.next.value) {
    let counter = 1;
    while(counter < int) {
      node = node.next;
      counter ++;    
    } node.next = node.next.next;
  } return node.value;
} 

exports.module = eeneyMeeneyMineyMo;