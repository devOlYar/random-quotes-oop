const cors = require('cors'); // Імпортуємо CORS
const express = require('express');
const quotes = require('./data/quotes');
const app = express();
const PORT = 3000;

app.use(cors()); // Дозволяє всі запити з будь-яких доменів

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});
