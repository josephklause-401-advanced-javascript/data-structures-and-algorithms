const { LinkedList } = require('../linked-list');

describe('linked list', () => {


  it('can properly count size of un populated list', () => {
    const linkedList = new LinkedList;
    expect(linkedList.size).toBe(0);
  });
  it('can properly count size of a single node list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    expect(linkedList.size).toBe(1);
  });
  it('can properly count size of multiple node list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('happy');
    expect(linkedList.size).toBe(2);
  });

  it('can properly count size when appending nodes to end of list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.append('angry');
    expect(linkedList.size).toBe(3);
  });

  it('if no list, append it will start new list and increase counter ', () => {
    const linkedList = new LinkedList;
    linkedList.append('joyful');
    expect(linkedList.size).toBe(1);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list and increase counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertBefore('sad', 'angry');
    expect(linkedList.toString()).toBe('joyful angry sad happy ');
    expect(linkedList.size).toBe(4);
  });

  it('Can successfully insert a node before the first node of a linked list and increase counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertBefore('joyful', 'angry');
    expect(linkedList.toString()).toBe('angry joyful sad happy ');
    expect(linkedList.size).toBe(4);
  });

  it('Can successfully insert a node after a node located in the middle of a linked list and increase counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertAfter('sad', 'angry');
    expect(linkedList.toString()).toBe('joyful sad angry happy ');
    expect(linkedList.size).toBe(4);
  });
 
  it('Can successfully insert a node after the last node of a linked list and increase counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertAfter('happy', 'angry');
    expect(linkedList.toString()).toBe('joyful sad happy angry ');
    expect(linkedList.size).toBe(4);
  });

  it('Can properly remove a node from the beginning of the list and decrease counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    linkedList.deletes('happy');
    expect(linkedList.includes('happy')).toBeFalsy();
    expect(linkedList.size).toBe(3);
  });

  it('Can properly remove a node from the end of the list and decrease counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    linkedList.deletes('joyful');
    expect(linkedList.includes('joyful')).toBeFalsy();
    expect(linkedList.size).toBe(3);
  });

  it('Can properly remove a node from the middle of the list and decrease counter', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    linkedList.deletes('sad');
    expect(linkedList.includes('sad')).toBeFalsy();
    expect(linkedList.size).toBe(3);
  });

  it('will return "exception" when k is less than list length', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromEnd(-1);
    expect(result).toBe('exception');
  });

  it('will return "exception" when k is greater than list length', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromEnd(4);
    expect(result).toBe('exception');
  });

  it('will return exception when k is equal to the list length', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromEnd(3);
    expect(result).toBe('exception');
  });

  it('will return value k from the end', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromEnd(0);
    expect(result).toBe('angry');
  });

  it('will return value k from the end', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromEnd(1);
    expect(result).toBe('sad');
  });

  it('will return value k from the end', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromEnd(2);
    expect(result).toBe('happy');
  });

  it('will return midpoint value from list from even numbered list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    const result = linkedList.valueFromMidPoint();
    expect(result).toBe('sad');
  });

  it('will return midpoint value from list from uneven numbered list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    const result = linkedList.valueFromMidPoint();
    expect(result).toBe('sad');
  });

});