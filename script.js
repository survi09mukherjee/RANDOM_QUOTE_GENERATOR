const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

function getNewQuote() {
  // Replace this with your own API endpoint or data source
  const quotes = [
    { quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', author: 'Helen Keller' },
    { quote: 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do.', author: 'Mark Twain' },
    { quote: 'The only person you are destined to become is the person you decide to be.', author: 'Ralph Waldo Emerson' },
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteElement.textContent = quote.quote;
  authorElement.textContent = '- ' + quote.author;
}

// Get a quote on page load
getNewQuote();
