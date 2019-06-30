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
  getTypeSanctions(type) {
    const sql = 'SELECT idMember, reason FROM Sanction WHERE name=$1;';
    const values = [type];

    return client
      .query(sql, values)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        throw err;
      });
  },

  getLastSanctions(number) {
    const sql = 'SELECT * FROM Sanction ORDER BY id DESC LIMIT $1;';
    const values = [number];

    return client
      .query(sql, values)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        throw err;
      });
  },
};
