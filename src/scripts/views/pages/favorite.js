import FavoriteRestoIdb from '../../data/favorite-resto';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2>Favorite</h2>
      <div id="resto" class="resto"></div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#resto');

    resto.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(resto);
    });

    restoContainer.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      if (card) {
        const restaurantId = card.getAttribute('data-id');
        window.location.hash = `#/detail/${restaurantId}`;
      }
    });
  },
};

export default Favorite;
