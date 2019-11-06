const readDir = require('../helper-functions/read-dir');
const getDateMod = require('../helper-functions/time-modified');
const readFile = require('../helper-functions/read-file');
const writeFile = require('../helper-functions/write-file');
const oopsFileFunc = require('../oops-file');

describe('oops-file', () => {

  it('gets file names from a directory', ()=> {
    const files = readDir('code-challenges/oops-file/data');
    expect(files.length).toBe(3);
  });

  it('gets last modified date for each file', () => {
    const dateModified = getDateMod('code-challenges/oops-file/data/test.txt');
    expect(new Date(dateModified)).toBeInstanceOf(Date);
  });

  it('reads files', () => {
    const text = readFile('code-challenges/oops-file/data/test.txt');
    expect(text).toBeDefined();
  });

  it('writes files', () => {
    writeFile('code-challenges/oops-file/newData/test.txt');
    const text = readFile('code-challenges/oops-file/newData/test.txt');
    expect(text).toBeDefined();
  });

  it('returns the correct new file path using the oopsFileFunc', ()=> {
    oopsFileFunc('code-challenges/oops-file/data');
    const files = readDir('code-challenges/oops-file/data-new');
    expect(files.length).toBe(3);
    expect(files[0].fileName).toEqual('bill-test1-2019-10-24T21:56:08');
  });

});
