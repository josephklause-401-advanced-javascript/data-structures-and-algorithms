class Set {
  constructor(array = []) {
    this.set = array.reduce((acc, item) => {
      if(!acc.includes(item)) acc.push(item);
      return acc;
    }, []);
  }

  add(value) {
    if(!this.has(value)) this.set.push(value);
  }

  remove(value) {
    for(let i = 0; i < this.set.length; i++) {
      if(this.set[i] === value) {
        this.set.splice(i, 1);
        break;
      }
    }
  }

  has(value) {
    return this.set.includes(value);
  }

  intersection(set) {
    return Set.intersection(this, set);
  }

  union(set) {
    return Set.union(this, set);
  }

  difference(set) {
    return Set.difference(this, set);
  }

  static intersection(set1, set2) {
    return set1.set.reduce((acc, item) => {
      if(set2.has(item)) acc.add(item);
      return acc;
    }, new Set([]));
  }

  static union(set1, set2) {
    return new Set([...set1.set, ...set2.set]);
  }

  static difference(set1, set2) {
    return set1.set.reduce((acc, item) => {
      if(!set2.has(item)) acc.add(item);
      return acc;
    }, set2.set.reduce((acc, item) => {
      if(!set1.has(item)) acc.add(item);
      return acc;
    }, new Set([])));
  }
 
}

module.exports = {
  Set
};