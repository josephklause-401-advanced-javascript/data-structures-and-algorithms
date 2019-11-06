const insertionSort = require('../insertionSort');

describe('insertionSort', () => {
  it('sorts an array of integers', ()=> {
    const intArray = [2, 8, 1, 9, 36, 21, 644, 300, 251];
    const result = insertionSort(intArray);
    expect(result).toEqual([1, 2, 8, 9, 21, 36, 251, 300, 644]);
  });
});