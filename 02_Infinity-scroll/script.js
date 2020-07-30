const imagesContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

let photosArray = [];

// CREATE ELEMENTS FOR LINKS,PHOTOS 
function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        item.appendChild(img);
        imagesContainer.appendChild(item);
    })
}

// UNSPLASH API
const count = 10;
const apiKey = 'YaC2JYgHTjPFYPTs9Gvp_-vtqUZdX3fwz-uDAzlAIzw'; //Use your own key,its free on unsplash.com :)
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // ERROR
    }
}

getPhotos()