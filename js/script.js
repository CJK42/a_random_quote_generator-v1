/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Thank you for taking the time to review my first Techdegree project! I am trying for 'Exceeds Expectations', however I am willing to accept a passing grade.


// The quotes array contains five objects and additional categorization tags.

var quotes = [
  {
    quote: 'Ones salvation could only be brought about through his own efforts.',
    source:  ' Nikola Tesla',
    citation: 'My Inventions: The Autobiography of Nikola Tesla',
    year: ' 1919',
    tags: ' tags: inspirational, Tesla'
  },
  {
    quote: 'As a single footstep will not make a path on the earth, so a single thought will not make a pathway in the mind. To make a deep physical path, we walk again and again. To make a deep mental path, we must think over and over the kind of thoughts we wish to dominate our lives. ',
    source:  ' Wilfred Arlan Peterson' ,
    citation: 'The Art of Living, Day by Day: Three Hundred and Sixty-five Thoughts, Ideas, Ideals, Experiences, Adventures, Inspirations, to Enrich Your Life',
    year: ' 1972',
    tags: ' tags: psychology, inspirational'
  },
  {
    quote: 'We must have perseverance and above all confidence in ourselves',
    source:  ' Marie Curie' ,
    citation: '"Madame Curie: A Biography". Book by Eve Curie Labouisse translated by Vincent Sheean',
    year: ' 1937',
    tags: ' tags: inspirational, Marie Curie'
  },
  {
    quote: 'Truth is the progressive diminution of residual error.',
    source:  ' R. Buckminster Fuller',
    citation: 'Synergetics 2: Further Explorations in the Geometry of Thinking',
    year: ' 1983'
  },
  {
    quote: 'Before printing was discovered, a century was equal to a thousand years.',
    source:  ' Henry David Thoreau',
    citation: 'A Week on the Concord and Merrimack Rivers',
    year: ' 1849',
    tags: ' tags: technology'
  }
];

 // The `getRandomQuote` function returns an object from the quotes array, using the 'randomNumber' variable in order to generate a number the length of the array.

function getRandomQuote( quotes ) {
  var randomNumber = Math.floor(Math.random() * quotes.length );
  return quotes[randomNumber];
};

// The printQuote function calls the getRandomQuote function and prints the quote to the page using the example HTML string format.
// Additional properties are displayed on the screen when present in quote object using conditional statements.


function printQuote() {
  var text = getRandomQuote(quotes);
  var output = '';
output += '<p class="quote">' + text.quote,' + </p>';
output += '<p class="source">' + text.source;

if(text.citation) {
  output += '<span class="citation">' + text.citation + '</span>';
}
if(text.year) {
  output += '<span class="year">' + text.year + '</span>'
}
if(text.tags) {
  output += text.tags;
}
output += '</p>';

  document.getElementById("quote-box").innerHTML = output;

};

// The randColor function generates a random number and applies it to the backgroundColor property. 

function randColor() {
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var rbgColor = "rgb(" + r + "," + b + "," + g + ")";

  document.body.style.backgroundColor = rbgColor;
  }

// The printQuote and randColor functions are called.

randColor();
printQuote();

// The setInterval method calls the printQuote and randColor function every 15 seconds.

var timer = setInterval(printQuote, [15000]) 
var backgroundColor = setInterval(randColor, [15000])

// The 'load-quote' element is referenced and the printQuote function is run when the button is clicked.

document.getElementById('load-quote').addEventListener("click", printQuote, false);