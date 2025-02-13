import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 4000

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json())

app.use('/plugin', express.static(path.join(__dirname, 'dist')))

app.get('/plugin/:file', (req, res) => {
    const filePath = path.join(__dirname, 'dist', req.params.file)
    console.log("\x1b[33mfilePath: \x1b[0m", filePath)

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    res.type('application/javascript')
    res.sendFile(filePath)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})