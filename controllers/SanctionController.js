const { Client } = require('node-rest-client');
const db = require('../db/db');

const client = new Client();

module.exports = {
  getBanKickSanction() {
    // BAN
    let banSanctions = null;
    db.getTypeSanctions('BAN').then(res => {
      banSanctions = res;
    });

    // EXCLURE
    let kickSanctions = null;
    db.getTypeSanctions('EXCLURE').then(res => {
      kickSanctions = res;
    });

    return {
      ban: banSanctions,
      kick: kickSanctions,
    };
  },

  getLastSanctions() {
    return db.getLastSanctions(5);
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
