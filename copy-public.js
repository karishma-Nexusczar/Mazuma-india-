const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public');
const destDir = __dirname;

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    // Avoid copying the public folder into itself
    if (src === srcDir && dest !== destDir) {
      return;
    }
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((child) => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    // Do not overwrite files in root if they are core app files (e.g. package.json, next.config.mjs)
    const filename = path.basename(src);
    if (dest === path.join(destDir, filename)) {
      if (['package.json', 'package-lock.json', 'next.config.mjs', 'tsconfig.json', '.gitignore', 'README.md', '.htaccess'].includes(filename)) {
        console.log(`Skipping copy of core file: ${filename}`);
        return;
      }
    }
    fs.copyFileSync(src, dest);
  }
}

console.log('Copying files from public/ into the root directory...');
copyRecursive(srcDir, destDir);
console.log('Copy completed!');
