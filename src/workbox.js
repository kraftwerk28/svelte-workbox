import { skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
skipWaiting();
precacheAndRoute(self.__WB_MANIFEST);
