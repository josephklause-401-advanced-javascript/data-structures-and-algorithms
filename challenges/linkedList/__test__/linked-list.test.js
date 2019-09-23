const { Node, LinkedList } = require('../linked-list');

describe('linked list', () => {

  it('can successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList;
    expect(linkedList.head).toBe(null);
  });

  it('can properly insert into the linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    expect(linkedList.head.value).toBe('happy');
  });

  it('the head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList;
    let node = new Node('happy');
    linkedList.insert('happy');
    expect(linkedList.head).toEqual(node);
  });

  it('can properly insert multiple values into list', () => {
    const linkedList = new LinkedList;
    let node = new Node('happy');
    linkedList.insert('happy');
    linkedList.insert('sad');
    expect(linkedList.head.next).toEqual(node);
  });

  it('returns true when searching for value in linked list that exists', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    expect(linkedList.includes('sad')).toBe(true);
  });
  
  it('returns false when searching for value in linked list that doesn\'t exist', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    expect(linkedList.includes('angry')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insert('happy');
    linkedList.insert('sad');
    linkedList.insert('angry');
    linkedList.insert('joyful');
    expect(linkedList.toString()).toBe('joyful angry sad happy ');
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