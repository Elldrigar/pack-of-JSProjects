// GET QUOTE FROM FORISMATIC API
async function getQuote() {
    const proxyURL = 'https://intense-tor-03895.herokuapp.com/'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

    try {
        const response = await fetch(proxyURL + apiURL)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Error', error)
    }
}

getQuote()