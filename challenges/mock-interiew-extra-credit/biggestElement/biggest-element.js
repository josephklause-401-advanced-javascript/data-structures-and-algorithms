class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class MaxStack {
  constructor() {
    this.top = null;
    this.max = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    if(this.max === null) {
      this.max = value;
    } else if(value > this.max) {
      this.max = value;
    }
  }

  pop() {
    let node = this.top;
    let returnValue = node.value;
    if(this.top.value === this.max) {
      this.max = null;
    }
    this.top = node.next;
    node = this.top;
    while(node) {
      if(this.max === null) {
        this.max = node.value;
      }
      else if(node.value > this.max) {
        this.max = node.value;
      }
      node = node.next;
    }
    return returnValue;
  }

  peek() {
    let node = this.top;
    return node.value;
  }

  getMax() {
    return this.max;
  }
}

module.exports = MaxStack;