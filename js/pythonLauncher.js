const util = require("util")
const spawn = require("child_process").spawn
const conv = require('binstring')

var runPython = function(script_loc, script_args, cb){
  script_args.unshift(script_loc)
  var result = ''
  var python = spawn('python', script_args, shell: 'true'})
  python.stdout.on('data',function(data){
    var returnData = data.toString('utf8');// buffer to string
    //util.log(returnData)
    return cb(returnData)
  })
}
