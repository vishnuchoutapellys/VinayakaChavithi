const fs = require('fs')
const path = require('path')

async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true })
  const entries = await fs.promises.readdir(src, { withFileTypes: true })
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath)
    } else {
      await fs.promises.copyFile(srcPath, destPath)
    }
  }
}

(async ()=>{
  try{
    const root = process.cwd()
    const dist = path.join(root, 'dist')
    const out = path.join('/', 'vercel', 'output')
    const stat = await fs.promises.stat(dist).catch(()=>null)
    if(!stat){
      console.error('dist folder not found; nothing to copy')
      process.exit(1)
    }
    await copyDir(dist, out)
    console.log('copied dist to /vercel/output')
  }catch(err){
    console.error(err)
    process.exit(1)
  }
})()
