const fs = require('fs');

const home = fs.readFileSync('app/home.css', 'utf8');
fs.writeFileSync('app/home.css', home + '\n}\n');

const about = fs.readFileSync('app/about-us/about-us.css', 'utf8');
fs.writeFileSync('app/about-us/about-us.css', about + '\n}\n');
