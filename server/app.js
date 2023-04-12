const express = require('express')
const path = require('path')

//configuring backend using middleware
const app = express()

//setup static middleware
app.use(express.static('../'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})