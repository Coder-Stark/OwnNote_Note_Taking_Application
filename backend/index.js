const connect = require('./db');
const express = require('express')

connect();

const app = express()
const port = 5000;

app.use(express.json());              //midleware

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`iNoteBook backend listening at http://localhost:${port}`)
})
