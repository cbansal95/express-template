const express = require('express')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const userRoute = require('./route/userRoute')




async function main() {
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

    app.use('/user',userRoute)

    app.get('/', (req, res) => {
        res.send('Hello World')
    })


    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
}
main()