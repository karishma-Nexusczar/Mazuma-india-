const AdmZip = require("adm-zip");
const fs = require("fs");
const path = require("path");

const zip = new AdmZip();
const basePath = __dirname;
const outputZip = "C:/Users/Dell/Desktop/deploy2.zip";

function addFolder(folderPath, zipPath) {
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    if (["node_modules", ".next", ".git", "out"].includes(file) || file.endsWith(".zip")) {
      continue;
    }
    const fullPath = path.join(folderPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      addFolder(fullPath, zipPath + file + "/");
    } else {
      zip.addLocalFile(fullPath, zipPath);
    }
  }
}

addFolder(basePath, "");
zip.writeZip(outputZip);
console.log("Created deploy2.zip");
