const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'dist');
const dest = path.resolve('/', 'vercel', 'output');

function copyRecursive(srcDir, destDir){
  if(!fs.existsSync(srcDir)) return;
  if(!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for(const entry of entries){
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if(entry.isDirectory()){
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// create vercel output static directory structure
const staticDir = path.join(dest, 'static');
copyRecursive(src, dest);
console.log('Copied', src, 'to', dest);
process.exit(0);
