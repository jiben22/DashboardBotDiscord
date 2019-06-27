const db = require('../db/db');

module.exports = {
  getSanctions() {
    return db
      .getSanctions()
      .then(sanctions => {
        return JSON.stringify(sanctions);
      })
      .catch(err => {
        throw err;
      });
  },
};
