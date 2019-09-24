class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    let node = new Node(value);
    node.value = value;
    node.next = this.head;
    this.head = node;
    this.size++;
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
    this.size++;
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
        this.size++;
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
        this.size++;
      } 
      node = node.next;
    }
        
    if(node.value === value && node.next === null) {
      this.append(newVal);
    }
  }

  valueFromEnd(k) {
    if(this.size <= k || k < 0) {
      return 'exception';
    }
    let node = this.head;
    for(k; k >= 0; k--){
      if(k === 0) {
        return node.value;
      }
      node = node.next;
    }
  }

  valueFromMidPoint(){
    const midPoint = Math.floor(this.size / 2);
    return this.valueFromEnd(midPoint);
  }

  deletes(value) {
    if(this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;
      while(currentNode) {
        if(currentNode.value === value) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
          this.size--;
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
