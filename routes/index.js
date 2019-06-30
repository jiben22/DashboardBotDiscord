const express = require('express');

const router = express.Router();
const sanctionController = require('../controllers/SanctionController');

/* GET home page. */
router.get('/', (req, res) => {
  sanctionController
    .getSanctions()
    .then(sanctions => {
      //console.log(sanctions);
      res.render('pages/dashboard', { sanctions });
    })
    .catch(() => {
      res.render('pages/dashboard');
    });
});

router.get('/bot-invitation', (req, res) => {
  res.render('pages/bot-invitation');
});

module.exports = router;
