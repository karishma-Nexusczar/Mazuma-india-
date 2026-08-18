const fs = require('fs');

// Fix home.css
let home = fs.readFileSync('app/home.css', 'utf8');
home = home.replace(/@media \(max-width: 1024px\) \{\s*@media/g, '} @media');
home = home.replace(/@media \(max-width: 1024px\) \{\s*\n\s*@media/g, '} @media');
fs.writeFileSync('app/home.css', home);

// Fix about-us.css
let about = fs.readFileSync('app/about-us/about-us.css', 'utf8');
about = about.replace(/@media \(max-width: 1024px\) \{\s*\.au-hero-content-wrapper \{[\s\S]*?z-index: 5;\s*\}/g, (match) => match + '\n}');
fs.writeFileSync('app/about-us/about-us.css', about);
