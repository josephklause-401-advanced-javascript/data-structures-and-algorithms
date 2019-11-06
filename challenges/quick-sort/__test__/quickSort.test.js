const { quickSort, partition, swap } = require('../quickSort');

describe('quickSort', () => {
  it('sorts an array of integers', ()=> {
    const intArray = [2, 8, 1, 9, 36, 21, 644, 300, 251];
    const left = 0;
    const right = intArray.length - 1;
    quickSort(intArray, left, right);
    expect(intArray).toEqual([1, 2, 8, 9, 21, 36, 251, 300, 644]);
  });

  it('swaps two values in an array', ()=> {
    const array = [1, 2, 4];
    swap(array, 0, 2);
    expect(array).toEqual([4, 2, 1]);
  });

  it('returns the index of where the pivot is', ()=> {
    const array = [1, 4, 8, 3, 6];
    const position = partition(array, 0, array.length - 1);
    expect(position).toBe(3);
  });
  
  it('returns the index of where the pivot is', ()=> {

    const array = [1, 4, 5, 8, 3];
    const position = partition(array, 0, array.length - 1);
    expect(position).toBe(1);
  });
});