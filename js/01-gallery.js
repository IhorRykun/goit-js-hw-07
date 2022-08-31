import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

//  !   Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function galleryImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" 
  href="large-image.jpg">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

//      !Реалізація делегування на div.gallery і отримання url великого зображення     

const imgMarkup = galleryImg(galleryItems); 
gallery.insertAdjacentHTML("beforeend", imgMarkup);
gallery.addEventListener('click', (e) => {
  e.preventDefault();
  const isGalleryEl = e.target.classList.contains("gallery__image");

  if (!isGalleryEl) {
    return;
  }

  //  !   Реалізація відкриття модального вікна

  const swatchUrlEl = e.target.dataset.source;

  //  !   Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям   
  
    const instance = basicLightbox.create(
    `<img class="modal__image" src="${swatchUrlEl}"/>`
  );
    instance.show();
    
    //  !   Створюємо функцію для закриття модального вікна по Esc

    window.addEventListener('keydown', (e) => {
        const closeEsc = 'Escape';
        if (e.code === closeEsc) {
            instance.close();
        }
    });

    
});




