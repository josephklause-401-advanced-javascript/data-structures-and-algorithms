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

  append(value) {
    const newLastNode = new Node(value);
    if(this.head === null) {
      this.head = newLastNode;
    } else {
      let formerLastNode = this.head;
      while(formerLastNode.next !== null) {
        formerLastNode = formerLastNode.next;
      }
      formerLastNode.next = newLastNode;
    }
  }


  insertBefore(value, newVal) {
    const newNode = new Node(newVal);

    let node = this.head;
    if(node.value === value) {
      this.insert(newVal);
    }

    while(node.next) {
      if(node.next.value === value) {
        newNode.next = node.next;
        node.next = newNode;
        node = newNode;
      } 
      node = node.next;
    } 
  }

  insertAfter(value, newVal) {
    const newNode = new Node(newVal);

    let node = this.head;

    while(node.next) {
      if(node.value === value) {
        newNode.next = node.next;
        node.next = newNode;
        node = newNode;
      } 
      node = node.next;
    }
        
    if(node.value === value && node.next === null) {
      this.append(newVal);
    }
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
