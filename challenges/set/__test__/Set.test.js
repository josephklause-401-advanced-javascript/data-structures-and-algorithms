const { Set } = require('../Set');

describe('Set class', () => {

  it('instantiates an empty array', () => {
    const name = new Set;
    expect(name.set).toEqual([]);
  });

  it('will instantiate when given an unempty array', () => {
    const nameArray = ['billy', 'tom'];
    const name = new Set(nameArray);
    expect(name.set).toEqual(nameArray);
  });

  it('will not instantiate duplicates when given an unempty array', () => {
    const nameArray = ['billy', 'tom', 'billy'];
    const name = new Set(nameArray);
    expect(name.set.length).toBe(2);
  });

  it('adds a value using add method', ()=> {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    expect(name.set).toEqual(['billy', 'dawn']);
  });

  it('does not add duplicate values', () => {
    const name = new Set;
    name.add('billy');
    name.add('billy');
    expect(name.set.length).toBe(1);
  });
  
  it('removes a value using remove method', ()=> {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    name.remove('billy');
    expect(name.set).toEqual(['dawn']);
  });

  it('returns true if value is in set using has method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    expect(name.has('billy')).toBe(true);
  });

  it('returns false if value is not in set using has method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    expect(name.has('george')).toBe(false);
  });

  it('returns array of intersected values between two sets using intersected method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');

    const mind = new Set;
    mind.add('billy');
    mind.add('dawn');
    mind.add('george');

    expect(name.intersection(mind)).toEqual(new Set(name.set));
  });

  it('returns array of union values between two sets using union method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');

    const mind = new Set;
    mind.add('billy');
    mind.add('dawn');
    mind.add('george');

    expect(name.union(mind)).toEqual(new Set(mind.set));
    expect(name.union(mind).set.length).toBe(3);
  });

  it('returns array of difference values between two sets using difference method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');

    const mind = new Set;
    mind.add('billy');
    mind.add('dawn');
    mind.add('george');

    expect(name.difference(mind)).toEqual(new Set(['george']));
  });

  it('returns array of intersected values between two sets using static intersected method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');

    const mind = new Set;
    mind.add('billy');
    mind.add('dawn');
    mind.add('george');

    expect(Set.intersection(name, mind)).toEqual(new Set(name.set));
  });

  it('returns array of union values between two sets using static union method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');

    const mind = new Set;
    mind.add('billy');
    mind.add('dawn');
    mind.add('george');

    expect(Set.union(name, mind)).toEqual(new Set(mind.set));
  });

  it('returns array of difference values between two sets using static difference method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');

    const mind = new Set;
    mind.add('billy');
    mind.add('dawn');
    mind.add('george');

    expect(Set.difference(name, mind)).toEqual(new Set(['george']));
  });
});