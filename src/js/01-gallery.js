// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Галерея 
import { galleryItems } from './gallery-items';


const listEl = document.querySelector('.gallery');
const dataGallery = galleryItems.map(renderGallery).join('');


function renderGallery ({original, preview, description}) {
    return`
    <li class=''gallery__item>
        <a class="gallery__link" href="${original}" >
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a>
    </li>
    `;
}

listEl.insertAdjacentHTML('beforeend', dataGallery);

new SimpleLightbox('.gallery a', { captionDelay:250});



