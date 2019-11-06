const fs = require('fs');

module.exports = (path) => {
  return fs.statSync(path).mtime;
};