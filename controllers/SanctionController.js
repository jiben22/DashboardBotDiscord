const { Client } = require('node-rest-client');
const db = require('../db/db');

const client = new Client();

module.exports = {
  getSanctions() {
    return db
      .getSanctions()
      .then(sanctions => {

        /*for(let index = 0; index < sanctions.length; index+1) {
          // Get username of member
          //const username = this.getNameMember(sanctions[index].idmember);
          //sanctions[index].username = username;
        }*/

        return sanctions;
      })
      .catch(err => {
        throw err;
      });
  },

  getNameMember(idMember) {
    const options = {
      headers: {
        Authorization: 'Bot NTg1NzMzMjg3NzAwMzMyNTU0.XRW82g.DnNsLK8L5BlYPiZnPcGH9476Bew',
        'Content-Type': 'application/json',
      },
    };

    // Call API
    return client.get(`https://discordapp.com/api/users/${idMember}`, options, function(data, response) {
      let username = null;
      if ( response['rawHeaders'].statusCode == 200 ) {
        username = data.username;
      }

      return username;
    });
  },
};
