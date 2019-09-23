const { Node, LinkedList } = require('../linked-list');

describe('linked list', () => {


  it('can properly append node to end of list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.append('joyful');
    expect(linkedList.toString()).toBe('angry sad happy joyful ');
  });

  it('can properly append multiple nodes to end of list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.append('angry');
    linkedList.append('joyful');
    expect(linkedList.toString()).toBe('sad happy angry joyful ');
  });

  it('if no list, it will start new list', () => {
    const linkedList = new LinkedList;
    linkedList.append('joyful');
    expect(linkedList.toString()).toBe('joyful ');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertBefore('sad', 'angry');
    expect(linkedList.toString()).toBe('joyful angry sad happy ');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertBefore('joyful', 'angry');
    expect(linkedList.toString()).toBe('angry joyful sad happy ');
  });

  it('Can successfully insert a node after a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertAfter('sad', 'angry');
    expect(linkedList.toString()).toBe('joyful sad angry happy ');
  });
 
  it('Can successfully insert a node after the last node of a linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('joyful');
    linkedList.insertAfter('happy', 'angry');
    expect(linkedList.toString()).toBe('joyful sad happy angry ');
  });

  it('Can properly remove a node from the beginning of the list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    linkedList.deletes('happy');
    expect(linkedList.includes('happy')).toBeFalsy();
  });

  it('Can properly remove a node from the end of the list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    linkedList.deletes('joyful');
    expect(linkedList.includes('joyful')).toBeFalsy();
  });

  it('Can properly remove a node from the middle of the list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    linkedList.deletes('sad');
    expect(linkedList.includes('sad')).toBeFalsy();
  });

});