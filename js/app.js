const url = "https://type.fit/api/quotes"
const quoteButton = document.getElementById('button')
const container = document.getElementById('quote-container');

const fetchQuotes = async url => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error)
    }
}

const chooseRandomQuote = async () => {
    try {
        const quoteArray = await fetchQuotes(url)
        const randomIndex = Math.floor(Math.random() * quoteArray.length)
        const randomQuote = quoteArray[randomIndex];
        renderQuote(randomQuote);
    } catch (error) {
        console.log(error)
    }
}

const renderQuote = ({ text, author }) => {
    const newQuoteDiv = document.createElement('div');
    const newAuthorDiv = document.createElement('div');
    newQuoteDiv.id = 'quote';
    newAuthorDiv.id = 'author'
    newQuoteDiv.innerHTML = text;
    newAuthorDiv.innerHTML = author;
    container.replaceChildren(newQuoteDiv, newAuthorDiv)
}

quoteButton.addEventListener('click', chooseRandomQuote)