// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');

function createLi(images) {
  return images
    .map(
      image =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="" title="${image.description}"/>
   </a>
</li>`
    )
    .join('');
}

ulGallery.innerHTML = createLi(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
