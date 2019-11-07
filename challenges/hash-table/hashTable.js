const DEFAULT_HASH = size => key => key
  .split('')
  .reduce((acc, letter, i) =>
    acc += letter.charCodeAt(0) + i, 0)
  % size;

module.exports = class HashTable {
  constructor(buckets = 20, hashAlgorithm = DEFAULT_HASH) {
    this.arr = [...Array(buckets)].map(() => []);
    this.hashAlgorithm = hashAlgorithm(buckets);
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    if(bucket.length >= 1) {
      for(let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key){
          return bucket[i][1];
        } 
      } return undefined;
    }
  }
  contains(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key){
        return true;
      }
    }
    return false;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.arr[index];

    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key){
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }
};
