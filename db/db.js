const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'botDiscord',
  password: 'root',
  port: 5432,
});
client.connect();

module.exports = {
  getSanctions() {
    return client
      .query('SELECT * FROM Sanction \n' +
        'ORDER BY id DESC \n' +
        'LIMIT 5')
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        throw err;
      });
  },
};
