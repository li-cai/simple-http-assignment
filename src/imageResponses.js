const fs = require('fs');

const memeImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(memeImage);
  response.end();
};

module.exports.getMeme = getMeme;
