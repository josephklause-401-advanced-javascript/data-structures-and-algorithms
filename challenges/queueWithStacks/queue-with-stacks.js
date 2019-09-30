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
    node.next = this.top;
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



module.exports = class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  dequeue() {
    if(this.outStack.top) {
      return this.outStack.pop();
    } 
    else while(this.inStack.top) {
      let value = this.inStack.pop();
      this.outStack.push(value);
    }
    if(this.outStack.top) {
      return this.outStack.pop();
    }
  }

};