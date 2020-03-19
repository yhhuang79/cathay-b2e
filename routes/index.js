var express = require('express');
var router = express.Router();

const Url = require('../model/url')

router.get('/:shortenUrl', function(req, res, next) {

  console.log( 'redirect:' + req.params.shortenUrl )

  if( req.params.shortenUrl && req.params.shortenUrl != 'undefined'){

    Url.findAll({
      where: { shorten_url: req.params.shortenUrl }
    })
    .then( result => {
      console.log(result[0].true_url)

      if(result[0].true_url && result[0].true_url !== 'undefined'){
        res.redirect(result[0].true_url)
      }

    })
    .catch( err => {
      console.log(err)
      res.status(404).send('Not found');
    })
  }
});

module.exports = router;
