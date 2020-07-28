// const quoteContainer = documnet.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')



// GET QUOTE FROM FORISMATIC API
async function getQuote() {
    const proxyURL = 'https://intense-tor-03895.herokuapp.com/'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

    try {
        const response = await fetch(proxyURL + apiURL)
        const data = await response.json()
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        //REDUCE FONT SIZE FOR LONG QUOTES
        if (data.quoteText.length > 100) {
            quoteText.classList.add('quote__text--long')
        } else {
            quoteText.classList.remove('quote__text--long')
        }
        quoteText.innerText = data.quoteText;
    } catch (error) {
        getQuote()
        console.log('Error', error)
    }
}

getQuote()