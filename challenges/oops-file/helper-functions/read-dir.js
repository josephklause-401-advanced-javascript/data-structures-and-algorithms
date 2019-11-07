const fs = require('fs');

module.exports = (path) => {
  return fs.readdirSync(path)
    .map(file => {
      return {
        filePath: `${path}/${file}`,
        fileName: file.match(/^[^.]*/)[0],
      };
    });
};

