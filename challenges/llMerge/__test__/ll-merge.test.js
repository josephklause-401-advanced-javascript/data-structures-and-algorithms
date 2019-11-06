const mergeList = require('../ll-merge');
const { LinkedList } = require('../../linkedList/linked-list');

describe('merge list', () => {
  
  const list1 = new LinkedList;
  list1.insert('happy');
  list1.insert('sad');
  list1.insert('angry');

  const list2 = new LinkedList;
  list2.insert('unhappy');
  list2.insert('unsad');
  list2.insert('unangry');

  it('will zip up two lists of equal length', () => {
    const result = mergeList(list1, list2);
    expect(result.value).toBe('unangry');
    expect(result.next.value).toBe('angry');
    expect(result.next.next.value).toBe('unsad');
    expect(result.next.next.next.value).toBe('sad');
    expect(result.next.next.next.next.value).toBe('unhappy');
    expect(result.next.next.next.next.next.value).toBe('happy');
  });

  it('will zip up two lists of unequal length', () => {
    list1.insert('emotional');
    const result = mergeList(list1, list2);
    expect(result.value).toBe('emotional');
    expect(result.next.value).toBe('unangry');
    expect(result.next.next.value).toBe('angry');
    expect(result.next.next.next.value).toBe('unsad');
    expect(result.next.next.next.next.value).toBe('sad');
    expect(result.next.next.next.next.next.value).toBe('unhappy');
    expect(result.next.next.next.next.next.next.value).toBe('happy');
  });
});