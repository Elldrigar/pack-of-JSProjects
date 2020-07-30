const imagesContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

let photosArray = [];

function setAtrributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// CREATE ELEMENTS FOR LINKS,PHOTOS 
function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');

        setAtrributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        const img = document.createElement('img');

        setAtrributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })

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
        console.log(error)
    }
}

getPhotos()