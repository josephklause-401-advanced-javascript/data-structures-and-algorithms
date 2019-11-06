class Node {
  constructor(animalType) {
    this.animal = animalType;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(animalType) {
    let node = new Node(animalType);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let node = this.top;
    this.top = node.next;
    return node.animal;
  }

  popCurrentNode(node) {
    let currentNode = node;
    let valueNode = node.next;
    currentNode.next = valueNode.next;
    return valueNode.animal;
  }
}



module.exports = class AnimalShelter {

  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(animalType) {
    this.inStack.push(animalType);
  }
  

  dequeue(preference) {
    
    if(!this.inStack.top && !this.outStack.top) {
      return 'No animals in the shelter at the moment';
    }

    if(!this.outStack.top) {
      while(this.inStack.top) {
        let animalType = this.inStack.pop();
        this.outStack.push(animalType);
      }
    }
    
    if(!(preference === 'dog' || preference === 'cat')) {
      if(this.outStack.top) {
        return this.outStack.pop();
      } 
    }

    if(this.outStack.top) {
      let node = this.outStack.top;
      
      if(node.animal === preference) {
        return this.outStack.pop();
      } 
      else if(node.next !== null){
        while(node.next !== null) {
          if(node.next.animal === preference) {
            return this.outStack.popCurrentNode(node);
          } 
          else {
            node = node.next;
          }
        }
      }

      if(this.inStack.top) {
        let node = this.inStack.top;
        let counter = -1;
        while(node) {
          counter++;
          node = node.next;
        }
        node = this.inStack.top;
  
        while(counter >= 0) {

          for(let i = counter; i >= 0; i--) {

            if(i === 0 && node.animal === preference) {
              counter++;
              for(let i = counter; i >= 0; i--) {
                node = this.inStack.top;
                if(i === 0) {
                  return this.outStack.popCurrentNode(node);
                }
                node = node.next;
              }
            } 
            node = node.next;
          }
          counter--;
        }
      }

      return `There are no ${preference}s in the shelter at the moment`;
    }
   
        
          //go to end of instack and loop backwards
          //pop off when node.animal === preference
           

  }


};