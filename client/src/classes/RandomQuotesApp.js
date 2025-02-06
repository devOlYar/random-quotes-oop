import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn');
    this.randomQuoteOurAPIBtn = document.getElementById(
      'random-quote-our-api-btn'
    );
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async randomQuoteViaAPIHandler(url) {
    const quoteViaAPI = await RandomQuote.getRandomQuoteViaAPI(url);
    this.changeCurrentQuote(quoteViaAPI);
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.randomQuoteViaAPIHandler(
        'https://quoteslate.vercel.app/api/quotes/random'
      )
    );
    this.randomQuoteOurAPIBtn.addEventListener('click', () =>
      this.randomQuoteViaAPIHandler(
        'http://localhost:3000/quotes/random-single'
      )
    );
  }
}

export default RandomQuotesApp;
