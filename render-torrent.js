var WebTorrent = require('webtorrent')

var client = new WebTorrent()

var torrentId  = 'magnet:?xt=urn:btih:7c2268d354b51e92f1a5108d23863a591ac91f86&dn=img.jpg&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'

client.add(torrentId, function (torrent) {
  console.log('magnet uri', torrent.magnetURI)
  console.log('filebloburl', torrent.torrentFileBlobURL)
  console.log(torrent)
  var file = torrent.files[0]
  file.appendTo('body')
})
