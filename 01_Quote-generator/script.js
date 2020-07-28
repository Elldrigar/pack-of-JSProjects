const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

function showSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// GET QUOTE FROM FORISMATIC API
async function getQuote() {
    showSpinner()
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
        hideSpinner()
    } catch (error) {
        getQuote()
        console.log('Error with API', error)
    }
}

// TWEET QUOTE ON TWEETER
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl, '_blank')
}

// EVENTS LISTENERS
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)

getQuote()