import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsImg = document.querySelector(".gallery");

function galeryItemImg(galleryItems) {
    return galleryItems
      .map((galleryItems) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`;
      })
      .join("");
};

const emgEl = galeryItemImg(galleryItems);

console.log(emgEl);

galleryItemsImg.insertAdjacentHTML("beforeend", emgEl);
