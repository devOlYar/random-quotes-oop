import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quoteViaAPI = await response.json();
      if (typeof quoteViaAPI === 'object') {
        const { id, quote, author } = quoteViaAPI;
        if (id && quote && author) {
          return new Quote(id, quote, author);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = 'http://localhost:3000/quotes/random-single';
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quoteViaAPI = await response.json();
      if (typeof quoteViaAPI === 'object') {
        const { id, text, author } = quoteViaAPI;
        if (id && text && author) {
          return new Quote(id, text, author);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
