import { createRestaurantItemTemplate } from '../templates/template-creator';
import RestoDbSource from '../../data/restodb-source';

const Home = {
  async render() {
    return `
    <div id="mainContent">
      <section class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./hero-image_2-small.jpg">
        <img src="./hero-image_2-large.jpg" alt="Hero Image" />
      </picture>
      </section>
      <section id="restaurant-list" class="restaurant-list">
        <h2>Explore Restaurant</h2>
        <div id="restaurants"></div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestoDbSource.getRestaurantList();

      const restaurantContainer = document.querySelector('#restaurants');
      restaurantContainer.innerHTML = restaurants.map((restaurant) => createRestaurantItemTemplate(restaurant)).join('');

      const restaurantCards = document.querySelectorAll('.card');
      restaurantCards.forEach((card) => {
        card.addEventListener('click', (event) => {
          const restaurantId = event.currentTarget.getAttribute('data-id');

          window.location.href = `#/detail/${restaurantId}`;
        });
      });
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      document.querySelector('#restaurants').innerHTML = '<p>Failed to load restaurant list.</p>';
    }
  },
};

export default Home;