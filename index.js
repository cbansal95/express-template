const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const userRoute = require('./route/userRoute')

async function main () {
  const db = await open({
    filename: 'database.db',
    driver: sqlite3.Database
  })

  const app = express()
  const port = 3000

  const attachDatabase = function (req, res, next) {
    req.db = db
    next()
  }

  app.use(attachDatabase)
  app.use(cors())
  app.use('/user', userRoute)
  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err)
    }
    console.error(err)
    if (err.responseCode && err.responseCode !== 500) { return res.status(err.responseCode).send(err.message) } else { return res.status(500).send('Something broke!') }
  })
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}
main()
