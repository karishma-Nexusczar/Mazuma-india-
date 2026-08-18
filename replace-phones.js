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

      // Type 1: Anchor tags
      const anchorRegex = /<a href="tel:\+919936351555">\+91 99363 51555<\/a>/g;
      if (anchorRegex.test(content)) {
        content = content.replace(anchorRegex, '<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><a href="tel:+919936351555">+91 99363 51555</a><a href="tel:+918851894350">+91 88518 94350</a></div>');
        changed = true;
      }

      // Type 2: Spans with Call Now
      const spanRegex = /<span>Call Now:\s*\+91 99363 51555<\/span>/g;
      if (spanRegex.test(content)) {
        content = content.replace(spanRegex, '<span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span>Call Now: +91 99363 51555</span><span>Call Now: +91 88518 94350</span></span>');
        changed = true;
      }

      // Type 3: Spans with Call Now (no colon)
      const spanRegex2 = /<span>Call Now \+91 99363 51555<\/span>/g;
      if (spanRegex2.test(content)) {
        content = content.replace(spanRegex2, '<span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span>Call Now: +91 99363 51555</span><span>Call Now: +91 88518 94350</span></span>');
        changed = true;
      }

      // Type 4: Spans with just number
      const spanRegex3 = /<span>\+91 99363 51555<\/span>/g;
      if (spanRegex3.test(content)) {
        content = content.replace(spanRegex3, '<span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span>+91 99363 51555</span><span>+91 88518 94350</span></span>');
        changed = true;
      }

      // Type 5: Raw text number with leading spaces
      const rawRegex = /([ \t]*)\+91 99363 51555/g;
      if (rawRegex.test(content)) {
        // Need to be careful not to replace inside the newly added strings
        // We will do a generic replace but only for exact matches not inside our new divs/spans
        let lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('+91 99363 51555') && !lines[i].includes('88518 94350')) {
            if (!lines[i].includes('href') && !lines[i].includes('Call Now')) {
              lines[i] = lines[i].replace(/\+91 99363 51555/, '+91 99363 51555 <br /> +91 88518 94350');
              changed = true;
            }
          }
        }
        content = lines.join('\n');
      }

      if (changed) {
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
      }
    });
  });
});
