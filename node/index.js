const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,Content-Type,Accept,content-type,application/json');
  next();
});

app.get('/iecho', (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).send({ error: 'no text' })
  }

  const reverseText = text.split('').reverse().join('')
  return res.send({
    text: reverseText,
    palindromo: reverseText === text
  })
})

app.listen(3000, '0.0.0.0', () => console.log('Listening on port 3000'))

module.exports = app
