const quoteElement = document.querySelector(".card__quote-text");
const quoteAuthor = document.querySelector(".card__quote-author");
const cardBackFace = card.querySelector(".card__face_side_back");

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

// gets random quote
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

// change quote text and author
function changeText() {
  quoteElement.textContent = quotePool[currentQuote].text;
  quoteAuthor.textContent = quotePool[currentQuote].author;
}

// click handler
function handleClick() {
  let randomQuoteNumber = getRandomQuote();
  previousQuote = currentQuote;
  currentQuote = randomQuoteNumber;
  changeText();
}

cardBackFace.addEventListener("click", handleClick);
