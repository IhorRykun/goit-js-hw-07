// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);


// function galleryImg(galleryItems) {
   
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//       })
//         .join("");

// }

// const galleryItem = document.querySelector(".gallery");
// const imgMarup = galleryImg(galleryItems); 
// galleryItem.insertAdjacentHTML("beforeend", imgMarup);


// const createLightboxInstance = (e) => {
//     const targetImgUrl = e.target.dataset.source;
//     const instance = basicLightbox.create (`
//     <img src="${targetImgUrl}" width="800", height="600">`);


//     instance.show(
//         document.addEventListener('keydown', (e) => {
//             if (e.key && e.code === "escape") {
//                 instance.close();
//             }
//         })
//     );
// };


// const onClickGallery = (e) => {
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   createLightboxInstance(e);
//   e.preventDefault();
// };

// imgMarup.addEventListener("click", onClickGallery);


