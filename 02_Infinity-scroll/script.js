// UNSPLASH API
const count = 10;
const apiKey = 'YaC2JYgHTjPFYPTs9Gvp_-vtqUZdX3fwz-uDAzlAIzw';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data)
    } catch (error) {

    }
}

// getPhotos()