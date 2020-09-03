const quoteElement = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");
const quoteButton = document.querySelector(".quote-button");

let currentQuote = 0;
let previousQuote = 4;

// quote storage
var quotePool = [
  {
    text: "Живи как можешь, раз нельзя как хочется.",
    author: "Цецилий Стаций",
    number: 0
  },
  {
    text: "Я устал, я мухожук",
    author: "Ельцин",
    number: 1
  },
  {
    text: "Дедушка Ленин хороший был вождь",
    author: "Летов",
    number: 2
  },
  {
    text: "Я устал, я Ельцин",
    author: "мухожук",
    number: 3
  },
  {
    text: "Сделаю как-нибудь",
    author: "Даня",
    number: 4
  },
  {
    text: "Я доем",
    author: "Дед",
    number: 5
  },
  {
    text: "Чертовски хороший кофе!.. И горячий!",
    author: "Дейл Купер",
    number: 6
  },
  {
    text:
      "Здесь Паша Эмильевич, обладавший сверхъестественным чутьем, понял, что сейчас его будут бить, может быть, даже ногами.",
    author: "«12 стульев», Ильф и Петров",
    number: 7
  },
  {
    text:
      "Зуб даю, двигатель экономического чуда есть осознание того, что и в газоотводной трубке над стволом также проживает Будда.",
    author: "«Дзен и искусство ухода за АК-47», 2h Company",
    number: 8
  }
];

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
