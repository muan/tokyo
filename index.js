var fs = require('fs')
var datetime = (new Date).toISOString()
var html = '<h1>Tokyo</h1><time>' + datetime + '</time><p>Such city.</p>'

if(fs.existsSync('./site')) {
  writeFile()
} else {
  fs.mkdir('./site', function(err) {
    writeFile()
    if (err) return console.log(err)
  })
}

function writeFile() {
  fs.writeFile('./site/index.html', html, function (err) {
    if (err) return console.log(err)
  })
}
