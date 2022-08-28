import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galeryEl = document.querySelector('ul.gallery');
console.log(galeryEl);

function creatListItem(item) {
    return galleryItems.map(item => {
        console.log(item);
    });
}
