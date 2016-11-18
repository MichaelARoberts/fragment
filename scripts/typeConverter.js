var hexToUTF = function(data){
  var nd = data.replace(/\s/g,'')
  var utf = conv(nd, {in:'hex', out:'utf8'})
  return utf
}
