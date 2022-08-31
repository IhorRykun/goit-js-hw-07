import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

function galleryImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__link" 
  href="${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryImg(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
  loop: false,
  docClose:true,
});

console.log(gallery);
