const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/dashboard');
});

router.get('/icons', (req, res) => {
  res.render('pages/icons');
});

router.get('/maps', (req, res) => {
  res.render('pages/maps');
});

router.get('/tables', (req, res) => {
  res.render('pages/tables');
});

module.exports = router;
