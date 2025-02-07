const express = require('express');
const cors = require('cors'); // Імпортуємо CORS
const quotes = require('./data/quotes');
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: '*', // default cross-origin value for CORS
  // origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
};

app.use(cors(corsOptions)); // Дозволяє всі запити з будь-яких доменів

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
