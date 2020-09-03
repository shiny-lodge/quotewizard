const quoteElement = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");
const quoteButton = document.querySelector(".quotes__button");

let currentQuote = 0;
let previousQuote = 4;

// random with lowest inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// count elements in quote pool
function countProperties(obj) {
  let count = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
  }
  return count;
}

function getRandomQuote() {
  let quotesNumber;
  let randomQuoteNumber;
  do {
    quotesNumber = countProperties(quotePool);
    randomQuoteNumber = getRandomInt(0, quotesNumber);
  } while (
    randomQuoteNumber === currentQuote ||
    randomQuoteNumber === previousQuote
  );
  return randomQuoteNumber;
}

// click handler
function handleClick() {
  let randomQuoteNumber = getRandomQuote();
  previousQuote = currentQuote;
  currentQuote = randomQuoteNumber;

  quoteElement.textContent = quotePool[currentQuote].text;
  quoteAuthor.textContent = quotePool[currentQuote].author;
}

quoteButton.addEventListener("click", handleClick);
