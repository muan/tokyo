var fs = require('fs')
var datetime = (new Date).toISOString()
var html = '<h1>Tokyo</h1><time>' + datetime + '</time><p>Such city.</p>'

fs.mkdir('./site', function(err) {
  if (err) return console.log(err)

  fs.writeFile('./site/index.html', html, function (err) {
    if (err) return console.log(err)
  })
})
