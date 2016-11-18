var getFileHex = function(file, cb){
  runPython('util/hex_util.py',['-bh', file], function(data){
    cb(data)
  })
}
