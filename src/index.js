import App from './App.svelte';
import { Workbox } from 'workbox-window';

// const isDev = process.env.NODE_ENV === 'development';

new App({ target: document.querySelector('#root') });

(function() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    const wb = new Workbox('/sw.js');
    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        if (confirm('App updated. Refresh?')) {
          location.reload();
        }
      }
    })
    wb.register()
      .then(() => console.log('SW registered.'))
      .catch(() => console.warn('Failed to register SW.'));
  })
})();
