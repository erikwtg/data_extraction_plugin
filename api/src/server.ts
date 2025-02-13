import express from 'express'
import cors from 'cors'
const app = express()

import { routes } from './routes/index'

app.use(express.json())

app.use(cors())

const port = process.env.PORT || 3000

app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
