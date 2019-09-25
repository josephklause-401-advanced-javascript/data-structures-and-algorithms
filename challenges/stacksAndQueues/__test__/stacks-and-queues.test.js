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

  it('instantiates an empty queue', () => {
    const emptyQueue = new Queue;
    expect(emptyQueue.front).toBe(null);
  });
});