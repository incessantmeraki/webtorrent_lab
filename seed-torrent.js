var dragDrop = require('drag-drop')
var WebTorrent = require('webtorrent')

var client = new WebTorrent()

var mypar = document.createElement('p')
mypar.textContent = 'Drag and drp here'
document.body.appendChild(mypar)

dragDrop('body', function (files) {
  client.seed(files, function(torrent) {
    console.log('Client is seeding' + torrent.magnetURI)
  })
})
