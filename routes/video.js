var express = require('express');
var router = express.Router();
const { toHTML } = require('../modules/toHTML.js');
const { toMP4 } = require('../modules/toMP4.js');
const { toPalette } = require('../modules/toPalette.js');
const { toGif } = require('../modules/toGif.js');

router.post('/convert-to-video', async function(req, res) {
										  
let data = req.body;

await toHTML(data);
await toMP4(data);
await toPalette();
await toGif();

res.send('success');
  
});

module.exports = router;
