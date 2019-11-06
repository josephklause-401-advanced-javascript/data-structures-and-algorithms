const FifoAnimalShelter = require('../fifo-animal-shelter');

describe('FifoAnimalShelter dequeue method', () => {

  it('if there are no animals in instack or outstack it returns no animal in shelter at moment', () => {
    const fifoAnimalShelter = new FifoAnimalShelter;
    expect(fifoAnimalShelter.dequeue('dog')).toBe('No animals in the shelter at the moment');
  });

  it('if preference isn\'t dog or cat, it returns animal who has been in shelter the longest', () => {
    const fifoAnimalShelter = new FifoAnimalShelter;
    fifoAnimalShelter.enqueue('cat');
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('dog');
    expect(fifoAnimalShelter.dequeue()).toBe('cat');
  });

  it('if preference is in outstack, it will return that preference', () => {
    const fifoAnimalShelter = new FifoAnimalShelter;
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('cat');
    fifoAnimalShelter.enqueue('dog');
    expect(fifoAnimalShelter.dequeue('cat')).toBe('cat');
  });

  it('if there are more than one preference in outstack it will return fifo', () => {
    const fifoAnimalShelter = new FifoAnimalShelter;
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('cat');
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.dequeue('dog');
    expect(fifoAnimalShelter.outStack.top.next.animal).toBe('dog');
  });

  it('if there are animals in outstack, and preferences in instack, it will loop through instack from bottom up without repopulating outstack', () => {
    const fifoAnimalShelter = new FifoAnimalShelter;
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.dequeue();
    fifoAnimalShelter.enqueue('cat');
    fifoAnimalShelter.enqueue('dog');

    expect(fifoAnimalShelter.outStack.top.animal).toBe('dog');
    expect(fifoAnimalShelter.outStack.top.next.animal).toBe('dog');
    expect(fifoAnimalShelter.outStack.top.next.next).toBe(null);
    expect(fifoAnimalShelter.inStack.top.animal).toBe('dog');
    expect(fifoAnimalShelter.inStack.top.next.animal).toBe('cat');
    expect(fifoAnimalShelter.inStack.top.next.next).toBe(null);
    const result = fifoAnimalShelter.dequeue('cat');
    expect(result).toBe('cat');
    expect(fifoAnimalShelter.outStack.top.animal).toBe('dog');
    expect(fifoAnimalShelter.outStack.top.next.animal).toBe('dog');
    expect(fifoAnimalShelter.inStack.top.animal).toBe('dog');
    expect(fifoAnimalShelter.inStack.top.next).toBe(null);
  });

  it('if there are no animals in shelter with preference, it will return message no preference in shelter', () => {
    const fifoAnimalShelter = new FifoAnimalShelter;
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('dog');
    fifoAnimalShelter.enqueue('dog');
    expect(fifoAnimalShelter.dequeue('cat')).toBe('There are no cats in the shelter at the moment');
  });
});