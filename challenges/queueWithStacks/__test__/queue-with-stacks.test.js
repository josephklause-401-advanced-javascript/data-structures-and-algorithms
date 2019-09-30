const PseudoQueue = require('../queue-with-stacks');

describe('PseudoQueue', () => {
  it('inserts a value into top of inStack with enqueue', () => {
    const pseudoQueue = new PseudoQueue;
    pseudoQueue.enqueue('dog');
    expect(pseudoQueue.inStack.top.value).toBe('dog');
    expect(pseudoQueue.inStack.top.next).toBe(null);
    expect(pseudoQueue.outStack.top).toBe(null);
  });
  
  it('inserts a values into inStack on top of once another', () => {
    const pseudoQueue = new PseudoQueue;
    pseudoQueue.enqueue('dog');
    pseudoQueue.enqueue('cat');
    expect(pseudoQueue.inStack.top.value).toBe('cat');
    expect(pseudoQueue.inStack.top.next.value).toBe('dog');
    expect(pseudoQueue.inStack.top.next.next).toBe(null);
    expect(pseudoQueue.outStack.top).toBe(null);
  });
  it('with dequeue if there is no node on top of outStack, it pushes all of inStack into outStack (first in first out style) and returns top value of outStack', () => {
    const pseudoQueue = new PseudoQueue;
    pseudoQueue.enqueue('dog');
    pseudoQueue.enqueue('mouse');
    pseudoQueue.enqueue('cat');
    const result = pseudoQueue.dequeue();
    expect(result).toBe('dog');
    expect(pseudoQueue.outStack.top.value).toBe('mouse');
    expect(pseudoQueue.outStack.top.next.value).toBe('cat');
    expect(pseudoQueue.outStack.top.next.next).toBe(null);
  });
  it('if there is a node on top of outStack, it pops off with dequeue', () => {
    const pseudoQueue = new PseudoQueue;
    pseudoQueue.enqueue('dog');
    pseudoQueue.enqueue('mouse');
    pseudoQueue.enqueue('cat');
    pseudoQueue.dequeue();
    expect(pseudoQueue.outStack.top.value).toBe('mouse');
    const result = pseudoQueue.dequeue();
    expect(result).toBe('mouse');
  });
  it('if there is no node on top of outStack or inStack nothing happens with dequeue', () => {
    const pseudoQueue = new PseudoQueue;
    const result = pseudoQueue.dequeue();
    expect(result).toBe(undefined);
  });
});