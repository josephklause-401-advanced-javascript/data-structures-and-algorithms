const { Stack, Queue } = require('../stacks-and-queues');

describe('stack', () => {

  it('will instantiate an empty stack', () => {
    const stack = new Stack;
    expect(stack.top).toBe(null);
  });

  it('can successfully push onto a stack', () => {
    const stack = new Stack;
    stack.push('orange');
    expect(stack.top.value).toBe('orange');
  });

  it('can sucessfully push multiple values onto a stack', () => {
    const stack = new Stack;
    stack.push('orange');
    stack.push('red');
    stack.push('blue');
    expect(stack.top.value).toBe('blue');
    expect(stack.top.next.value).toBe('red');
    expect(stack.top.next.next.value).toBe('orange');
  });

  it('can sucessfully pop of the stack', () => {
    const stack = new Stack;
    stack.push('orange');
    stack.push('red');
    stack.push('blue');
    const result = stack.pop();
    expect(result).toBe('blue');
    expect(stack.top.value).toBe('red');
  });

  it('can empty a stack after multiple pops', () => {
    const stack = new Stack;
    stack.push('orange');
    stack.push('red');
    stack.push('blue');
    const result1 = stack.pop();
    const result2 = stack.pop();
    const result3 = stack.pop();
    expect(result1).toBe('blue');
    expect(result2).toBe('red');
    expect(result3).toBe('orange');
    expect(stack.top).toBe(null);
  });
  
  it('can peek next item in the stack', () => {
    const stack = new Stack;
    stack.push('orange');
    stack.push('red');
    stack.push('blue');
    const result = stack.peek();
    expect(result).toBe('blue');
    expect(stack.top.next.next.value).toBe('orange');
  });
});

describe('queue', () => {

  it('can enqueue into a queue', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    expect(queue.front.value).toBe('orange');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    queue.enqueue('blue');
    queue.enqueue('red');
    expect(queue.front.value).toBe('orange');
    expect(queue.front.next.value).toBe('blue');
    expect(queue.front.next.next.value).toBe('red');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    queue.enqueue('blue');
    queue.enqueue('red');
    const result = queue.dequeue();
    expect(result).toBe('orange');
    expect(queue.front.value).toBe('blue');
  });
 
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    queue.enqueue('blue');
    queue.enqueue('red');
    const result1 = queue.dequeue();
    const result2 = queue.dequeue();
    const result3 = queue.dequeue();
    expect(result1).toBe('orange');
    expect(result2).toBe('blue');
    expect(result3).toBe('red');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    queue.enqueue('blue');
    queue.enqueue('red');
    const result = queue.peek();
    expect(result).toBe('orange');
  });
  
  it('instantiates an empty queue', () => {
    const emptyQueue = new Queue;
    expect(emptyQueue.front).toBe(null);
  });

  it('has returns false if empty Queue', () => {
    const emptyQueue = new Queue;
    expect(emptyQueue.has('black')).toBe(false);
  });

  it('has returns false if value is not in Queue', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    queue.enqueue('blue');
    queue.enqueue('red');
    expect(queue.has('black')).toBe(false);
  });

  it('has returns true if value is in Queue', () => {
    const queue = new Queue;
    queue.enqueue('orange');
    queue.enqueue('blue');
    queue.enqueue('red');
    expect(queue.has('red')).toBe(true);
  });

});