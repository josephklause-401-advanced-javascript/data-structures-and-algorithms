const MaxStack = require('../biggest-element');

describe('MaxStack, getMax', () => {

  it('when only one value in stack, it is max in stack', () => {
    const maxStack = new MaxStack;
    maxStack.push(10);
    expect(maxStack.getMax()).toBe(10);

  });

  it('when more than one value in stack, it gets the highest value, regardless of order', () => {
    const maxStack = new MaxStack;
    maxStack.push(10);
    maxStack.push(7);
    maxStack.push(8);
    expect(maxStack.getMax()).toBe(10);
  });

  it('when new value is added and is higher, it becomes max in stack', () => {
    const maxStack = new MaxStack;
    maxStack.push(10);
    maxStack.push(7);
    maxStack.push(12);
    expect(maxStack.getMax()).toBe(12);
  });

  it('when value is popped and is the max, it reassigns max to the new highest value, and popped value is removed from stack', () => {
    const maxStack = new MaxStack;
    maxStack.push(10);
    maxStack.push(7);
    maxStack.push(12);
    expect(maxStack.getMax()).toBe(12);
    expect(maxStack.pop()).toBe(12);
    expect(maxStack.getMax()).toBe(10);
    expect(maxStack.pop()).toBe(7);
  });

  it('when value is popped and it isn\'t the max, the max remains the same, and popped value is removed from stack', () => {
    const maxStack = new MaxStack;
    maxStack.push(10);
    maxStack.push(12);
    maxStack.push(7);
    maxStack.push(9);
    expect(maxStack.getMax()).toBe(12);
    expect(maxStack.pop()).toBe(9);
    expect(maxStack.getMax()).toBe(12);
    expect(maxStack.pop()).toBe(7);
  });
});