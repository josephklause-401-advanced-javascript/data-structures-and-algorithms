class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.value = value;
    node.next = this.head;
    this.top = node;
  }

  pop() {
    let node = this.top;
    this.top = node.next;
    return node.value;
  }

  peek() {
    let node = this.top;
    return node.value;
  }
}



class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let node = new Node(value);
    node.value = value;
    node.next = this.front;
    this.front = node;
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

module.exports = {
  Stack, 
  Queue,
};