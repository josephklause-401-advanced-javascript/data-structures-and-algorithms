const fs = require('fs');

module.exports = (path) => {
  return fs.readdirSync(path)
    .map(file => {
      
      const fileContent = fs.readFileSync(`${path}/${file}`, { encoding: 'utf8' });
      const fileName = file.match(/^[^.]*/)[0];
      const dateMod = fs.statSync(`${path}/${file}`).mtime.toISOString();
      
      return fs.writeFileSync(`${path}-new/${fileContent}-${`${fileName}`}-${dateMod}`);
    });
};