var quote = ["Ambition is the path to success. Persistence is the vehicle you arrive in.", "She who stops being better stops being good.", "Formula for failure: Try to please everybody.", "Keep your eyes on the stars, and your feet on the ground.", "Our greatest glory is not in never falling, but in rising every time we fall.", "Your limitation-it's only your imagination.","Sometimes 'later' becomes 'never'.","Feel the fear and do it anyway.","You can't escape the responsibility of tomorrow by evading it today", "hi dillon", "hi richard"];
var button = $('.button');
var add = $('.add');
button.on("click", addQuote);
function addQuote(){
  var randomDec = Math.random();
  var randomNum = randomDec*quote.length;
  var index = Math.floor(randomNum);
  add.text(`${quote[index]}`);
  event.preventDefault();
}
