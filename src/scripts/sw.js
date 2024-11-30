import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST || []);

const catalogueApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'catalogue-api',
  }),
);

registerRoute(catalogueApi);

const fontAwesome = new Route(
  ({ url }) => url.href.startsWith('https://use.fontawesome.com'),
  new StaleWhileRevalidate({
    cacheName: 'icon-fa',
  }),
);

registerRoute(fontAwesome);


self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});