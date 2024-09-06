import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { preview } from 'vite';

const galleryItems = [
    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 1 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 2 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 3 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 4 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 5 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 6 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 7 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 8 description',
    },

    {
        preview: 'small-image.jpg',
        original: 'large-image.jpg',
        description: 'Image 9 description',
    },
];

const galleryContainer = document.querySelector('.gallery');

const galleryGalleryItem = (items) => {
    return items;
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
        `;
    })
    .join('');
};
