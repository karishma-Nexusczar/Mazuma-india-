const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('C:/Users/Dell/Desktop/deploy.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Append files from a sub-directory, putting its contents at the root of archive
archive.glob('**/*', {
  cwd: __dirname,
  ignore: ['node_modules/**', '.next/**', '.git/**', '*.zip', 'out/**']
});

archive.finalize();
