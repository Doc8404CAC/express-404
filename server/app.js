const express = require('express');
const { reset } = require('nodemon');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.get('/get-error-new', (req, res) => {
  res.status(404)
  throw new Error("Sorry, the requested resource couldn't be found")
})



app.use((req, res, next) => {
  const error = new Error()
  next(error)
})

app.use((err, req, res, next) => {
code='shit'
  const body = {
    "message": "Sorry, the requested resource couldn't be found.",
    "statusCode": `${code}`
  }
  res.status(err.status || 500)
  res.send(body)

})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
