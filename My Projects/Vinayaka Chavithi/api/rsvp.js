const fs = require('fs').promises
const path = require('path')

module.exports = async (req, res) => {
  const DATA_FILE = path.join(process.cwd(), 'server', 'rsvps.json')

  try {
    if (req.method === 'POST') {
      const body = req.body && Object.keys(req.body).length ? req.body : await readJson(req)
      const data = await fs.readFile(DATA_FILE, 'utf8').catch(()=> '[]')
      const arr = JSON.parse(data)
      const entry = Object.assign({ id: Date.now() }, body)
      arr.push(entry)
      await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2))
      res.status(200).json({ ok: true })
      return
    }

    if (req.method === 'GET') {
      const data = await fs.readFile(DATA_FILE, 'utf8').catch(()=> '[]')
      res.setHeader('Content-Type','application/json')
      res.status(200).send(data)
      return
    }

    res.setHeader('Allow','GET,POST')
    res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

async function readJson(req){
  return new Promise((resolve, reject)=>{
    let body = ''
    req.on('data', chunk=> body += chunk)
    req.on('end', ()=>{
      try{
        resolve(JSON.parse(body))
      }catch(err){
        resolve({})
      }
    })
    req.on('error', reject)
  })
}
