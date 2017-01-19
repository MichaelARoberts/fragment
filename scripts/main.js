$('#hexGenButton').click(function(e){
  e.preventDefault();
  getFileHex($('#pathInput').val(), function(data){
    $('#hexBox').text(data);
    $('#textBox').text(hexToUTF(data))
  })
})
