class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.value = value;
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  deletes(value) {
    if(this.head.value === value) {
      this.head = this.head.next;
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;
      while(currentNode) {
        if(currentNode.value === value) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
  }


  includes(value) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === value) {
        return true;
      } currentNode = currentNode.next;
    } return false;
  }

  toString() {
    let currentNode = this.head;
    let returnString = '';
    while(currentNode) {
      returnString += String(currentNode.value) + ' ';
      currentNode = currentNode.next;
    } 
    return returnString;
  }
}

module.exports = {
  LinkedList,
  Node,
};
