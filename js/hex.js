var getFileHex = function(file, cb){
  runPython('plugins/hex_util.py',['-bh', file], function(data){
    cb(data)
  })
}

var hexToUTF = function(data){
  var nd = data.replace(/\s/g,'')
  var utf = conv(nd, {in:'hex', out:'utf8'})
  return utf
}
