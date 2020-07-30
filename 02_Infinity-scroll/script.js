const imagesContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let isInitialLoad = true;

// UNSPLASH API
let initialCount = 10;
const apiKey = 'YaC2JYgHTjPFYPTs9Gvp_-vtqUZdX3fwz-uDAzlAIzw'; //Use your own key,its free on unsplash.com :)
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;

function updateApiUrlWithNewCount(picCount) {
  apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${picCount}`;
}

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

function setAtrributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// CREATE ELEMENTS FOR LINKS,PHOTOS
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    // CREATE <a> TO LINK TO UNSPLASH
    const item = document.createElement('a');

    setAtrributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    //CREATE <img> for PHOTO
    const img = document.createElement('img');

    setAtrributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // EVENT LISTENER,CHECKING IS FINISHED LOADING
    img.addEventListener('load', imageLoaded);

    item.appendChild(img);
    imagesContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
    if (isInitialLoad) {
      updateApiUrlWithNewCount(30);
      isInitialLoad = false;
    }
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
