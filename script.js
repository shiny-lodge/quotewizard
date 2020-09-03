const quoteElement = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");
const quoteButton = document.querySelector(".quote-button");

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

// click handler
function handleClick() {
  let quotesNumber;
  let randomQuoteNumber;
  do {
    console.log(`Let's do it!`);
    quotesNumber = countProperties(quotePool);
    console.log(`There are ${quotesNumber} quotes`);
    randomQuoteNumber = getRandomInt(0, quotesNumber);
    console.log(`I pick quote #${randomQuoteNumber}`);
  } while (
    randomQuoteNumber === currentQuote ||
    randomQuoteNumber === previousQuote
  );

  previousQuote = currentQuote;
  currentQuote = randomQuoteNumber;

  quoteElement.textContent = quotePool[currentQuote].text;
  quoteAuthor.textContent = quotePool[currentQuote].author;
}

quoteButton.addEventListener("click", handleClick);
