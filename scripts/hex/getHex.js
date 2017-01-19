var getFileHex = function(file, cb){
  runPython('plugins/hex_util.py',['-bh', file], function(data){
    cb(data)
  })
}
