function Quote(text, author="unknown") {
  this.text = text;
  this.author = author;
}


Quote.prototype.shouted = function() {
  return this.text.toUpperCase();
};


Quote.prototype.toDisplay = function() {
  if(this.author === 'unknown'){
    return 'Someone once said, ' + this.text;
  } else {
    return 'As the wise ' + this.author + ' once said, ' + this.text;
  }
};

Quote.prototype.wordCount = function () {
  return this.text.split(" ").length;
};

Quote.prototype.randomWord = function() {
  var word = this.text.split(" ");
  var position = Math.floor(Math.random() * this.wordCount());
  return word[position];
};


Quote.prototype.abbreviated = function() {
  if(this.text.length > 20){
    return this.text.slice(0, 20) + "...";
  }
  return this.text;
};

Quote.prototype.withDoubt = function() {
  var quoteText = this.text;
  if(this.text.includes("!")){
    quoteText = quoteText.replace("!", "?");
  }
  if(this.text.includes(".")){
    quoteText = quoteText.replace(".", "?");
  }
  var a = quoteText.charAt(quoteText.length - 1);
  if(a !== "." && a !== "!" && a !== "?"){
    quoteText = quoteText + "?";
  }
  return quoteText;
};
