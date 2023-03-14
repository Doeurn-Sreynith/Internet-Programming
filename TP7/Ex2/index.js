const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile("src/ex2/Ex3.html",{ root:("./")})


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


