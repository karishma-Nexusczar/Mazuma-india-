const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const DIRS = [
  'c:\\Users\\Dell\\Desktop\\Taxtation-Mazuma-India\\app',
  'c:\\Users\\Dell\\Desktop\\Taxtation-Mazuma-India\\components'
];

DIRS.forEach(dir => {
  walk(dir, (err, results) => {
    if (err) throw err;
    results.filter(f => f.endsWith('.tsx')).forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;

      if (content.includes('88518 94350') || content.includes('8851894350')) {
        content = content.replace(/88518 94350/g, '99998 65586');
        content = content.replace(/8851894350/g, '9999865586');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
      }
    });
  });
});
