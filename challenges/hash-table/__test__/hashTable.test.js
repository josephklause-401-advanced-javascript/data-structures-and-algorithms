const HashTable = require('../hashTable');

describe('HashTable', () => {
  it('instantiates an array of empty arrays of a specified length', ()=> {
    const hashTable = new HashTable();
    expect(hashTable.arr.length).toBe(20);
    expect(hashTable.arr[0]).toEqual([]);

  });
  it('hashes a key', () => {
    const hashTable = new HashTable();
    expect(hashTable.hash('Joe')).toBe(9);
  });
  it('sets a value from a key in array', ()=> {
    const hashTable = new HashTable();
    const key = 'Joe';
    const value = 'Klause';
    const referenceIndex = hashTable.hash(key);
    hashTable.set(key, value);
    expect(hashTable.arr[referenceIndex][0]).toStrictEqual([key, value]);
  });
  it('gets a value from a key in array', ()=> {
    const hashTable = new HashTable();
    const key = 'Joe';
    const value = 'Klause';
    hashTable.set(key, value);
    expect(hashTable.get(key)).toBe(value);
  }); 
  it('will return true if array contains a key', ()=> {
    const hashTable = new HashTable();
    const key = 'Joe';
    const value = 'Klause';
    hashTable.set(key, value);
    expect(hashTable.contains(key)).toBe(true);
  });
  it('will return false if an array does not contains a key', ()=> {
    const hashTable = new HashTable();
    const key = 'Joe';
    const value = 'Klause';
    hashTable.set(key, value);
    expect(hashTable.contains('dog')).toBe(false);
  });
  it('will update value in an array', ()=> {
    const hashTable = new HashTable();
    const key = 'Joe';
    const value = 'Klause';
    const newValue = 'LaCavera';
    const referenceIndex = hashTable.hash(key);
    hashTable.set(key, value);
    hashTable.set(key, newValue);
    expect(hashTable.arr[referenceIndex][0]).toStrictEqual([key, newValue]);
  });
});