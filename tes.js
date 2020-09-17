const request = require('request');
const cheerio = require('cheerio');

let url = 'http://javbus.com';
request(url, function (err, res, body) {
  if (err && res.statusCode !== 200) throw err;
  console.log(body);
});