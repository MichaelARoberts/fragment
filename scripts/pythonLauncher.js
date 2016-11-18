const util = require("util")
const spawn = require("child_process").spawn
const conv = require('binstring')

var runPython = function(script_loc, script_args, cb){
  script_args.unshift(script_loc)
  var python = spawn(
    'python',
    script_args
  )

  //util.log('reading:' + script_loc)
  python.stdout.on('data',function(data){
    var returnData = data.toString('utf8');// buffer to string
    //util.log(returnData)
    return cb(returnData)
  })


}

runPython('util/hex_util.py',['-bh','util/hex_util.py'], function(data){
  console.log(hexToUTF(data))
})
