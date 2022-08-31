import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryItem = document.querySelector(".gallery");

function galleryImg(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
  }).join('');
}

galleryItem.insertAdjacentHTML("beforeend", galleryImg(galleryItems));

























