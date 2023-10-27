const express = require('express')
const app = express()
const port = 8000

app.use((req, res, next) => {
    console.log('Hello World');
    next()
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`Server is running in port http://localhost:${port}`);
})