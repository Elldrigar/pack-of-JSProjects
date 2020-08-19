const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameElement = document.getElementById('website-name');
const websiteUrlElement = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');
let bookmarks = [];

// SHOW MODAL
function showModal() {
  modal.classList.add('show-modal');
  websiteNameElement.focus();
}

// VALIDATE FORM
function validate(nameValue, urlValue) {
  const expression = /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert('Proszę uzupełnij obydwa pola!');
    return false;
  }
  if (!urlValue.match(regex)) {
    alert('Proszę podaj prawidłowy adres www.');
    return false;
  }
  return true;
}

// BUILD BOOKMARKS DOM
function buildBookmarks() {
  bookmarksContainer.textContent = '';
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;
    const item = document.createElement('div');
    item.classList.add('bookmark__item');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('bookmark__close', 'far', 'fa-times-circle');
    closeIcon.setAttribute('title', 'Usuń');
    // closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);
    const linkInfo = document.createElement('div');
    linkInfo.classList.add('bookmark__name');
    const favicon = document.createElement('img');
    favicon.setAttribute(
      'src',
      `https://s2.googleusercontent.com/s2/favicons?domain=${url}`
    );
    favicon.setAttribute('alt', 'favicon');
    const link = document.createElement('a');
    link.setAttribute('href', `${url}`);
    link.setAttribute('target', '_blank');
    link.textContent = name;

    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
  });
}

// FETCH BOOKMARKS
function fetchBookmarks() {
  if (localStorage.getItem('bookmarks')) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  } else {
    bookmarks = [
      {
        name: 'Gawron',
        url: 'https://gawron.me',
      },
    ];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  buildBookmarks();
}

//HANDLE FORM
function storeBookmark(event) {
  event.preventDefault();
  const nameValue = websiteNameElement.value;
  let urlValue = websiteUrlElement.value;
  if (!urlValue.includes('http://', 'https://')) {
    urlValue = `https://${urlValue}`;
  }

  if (!validate(nameValue, urlValue)) {
    return false;
  }
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
  bookmarkForm.reset();
  websiteNameElement.focus();
}

// EVENT LISTENER
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () =>
  modal.classList.remove('show-modal')
);
window.addEventListener('click', (event) =>
  event.target === modal ? modal.classList.remove('show-modal') : false
);
bookmarkForm.addEventListener('submit', storeBookmark);

// ON LOAD
fetchBookmarks();
