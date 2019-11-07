const HashTable = require('../../hash-table/hashTable');
const { leftJoin } = require('../leftJoin');

describe('left join', () => {

  it('joins two hashtables using left join logic (all key-values in left hash table are returned, and cooresponding right will be returned, if no value in right, will be marked null', () => {
    const leftHT = new HashTable();
    leftHT.set('fond', 'enamored');
    leftHT.set('wrath', 'anger');
    leftHT.set('diligent', 'employed');
    leftHT.set('outfit', 'garb');
    leftHT.set('guide', 'usher');

    const rightHT = new HashTable();
    rightHT.set('fond', 'averse');
    rightHT.set('wrath', 'delight');
    rightHT.set('diligent', 'idle');
    rightHT.set('guide', 'follow');
    rightHT.set('flow', 'jam');

    expect(leftJoin(leftHT, rightHT)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['outfit', 'garb', null],
      ['fond', 'enamored', 'averse'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
    ]);
  });

});
