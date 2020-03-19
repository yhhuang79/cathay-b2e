var express = require('express');
var router = express.Router();

const Url = require('../model/url')

function confirmUsable(digits, cb) {
  const urlCode = makeRandom(digits);
  Url.count({
    where:{ shorten_url: urlCode}
  }).then(count => {
    if(count === 0) {
      cb(urlCode);
    } else {
      return confirmUsable(digits, cb);
    }
  })
}

function makeRandom( digits ){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < digits; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

router.post('/shorturl', function(req, res, next) {
  confirmUsable(6, urlCode => {
    Url.create({
      shorten_url: urlCode,
      true_url: req.body.trueUrl
    }).then(() =>{
      res.send( urlCode )
    }).catch( (err) => {
      console.log(err);
    })
  })
});



module.exports = router;
