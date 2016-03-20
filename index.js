const request = require('superagent')

request
  .get('http://zeitgometerapi.herokuapp.com/popular')
  .set('Accept', 'application/json')
  .set('Content-Type', 'plain/text')
  .end((err, res) => {
    if (err) return console.error(err)
    console.log(res)
  })
