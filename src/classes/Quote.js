class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatText() {
    return `"${this.text.replace(/\.$/, '')}"`; // Remove the dot at the end if it exists
  }

  formatAuthor() {
    return `© ${this.author}`;
  }
}

export default Quote;
