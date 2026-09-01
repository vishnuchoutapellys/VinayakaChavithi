const express = require('express')
const cors = require('cors')
const fs = require('fs').promises
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(__dirname,'rsvps.json')

app.post('/api/rsvp', async (req, res) => {
  try{
    const data = await fs.readFile(DATA_FILE, 'utf8').catch(()=> '[]')
    const arr = JSON.parse(data)
    const entry = Object.assign({ id: Date.now() }, req.body)
    arr.push(entry)
    await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2))
    res.json({ ok: true })
  }catch(err){
    console.error(err)
    res.status(500).json({ ok: false })
  }
})

app.get('/api/rsvp', async (req, res) => {
  const data = await fs.readFile(DATA_FILE, 'utf8').catch(()=> '[]')
  res.type('json').send(data)
})

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log(`RSVP server listening on ${port}`))
