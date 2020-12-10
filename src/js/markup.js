import menu from '../menu.json'
import itemsTemplate from '../templates/gallery-items.hbs'

const galleryRef = document.querySelector('.js-menu')  
console.log(galleryRef);

// Вставка макета
const markup = itemsTemplate({menu})

galleryRef.insertAdjacentHTML('beforeend', markup)


