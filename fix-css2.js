const fs = require('fs');
let css = fs.readFileSync('app/about-us/about-us.css', 'utf8');

// Find the line that needs closing:
//   .au-btn-orange, .au-btn-outline {
//     width: 100%;
//     justify-content: center;
//   }
//   
// /* ============================================================
//    MAZUMA INDIA - ABOUT US PAGE STYLES

css = css.replace(/justify-content: center;\n  }\n  \n\n\/\* ============================================================/g, 'justify-content: center;\n  }\n}\n\n/* ============================================================');

fs.writeFileSync('app/about-us/about-us.css', css);
