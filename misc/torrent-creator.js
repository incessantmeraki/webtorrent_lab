var createTorrent = require('create-torrent')
var fs = require('fs')

createTorrent('./img.jpg', function (err, torrent) {
  if (!err) 
    fs.writeFile('my.torrent', torrent)
})
