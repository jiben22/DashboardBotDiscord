const express = require('express');

const router = express.Router();
const sanctionController = require('../controllers/SanctionController');

/* GET home page. */
router.get('/', (req, res) => {
  const banKickSanctions = sanctionController.getBanKickSanction();
  const sanctions = sanctionController.getLastSanctions();
  res.render('pages/dashboard', { banKickSanctions, sanctions });
});

router.get('/bot-invitation', (req, res) => {
  res.render('pages/bot-invitation');
});

module.exports = router;
