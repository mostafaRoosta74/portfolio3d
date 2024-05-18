importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

if (workbox) {
	workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

	self.addEventListener('message', (event) => {
		if (event.data && event.data.type === 'SKIP_WAITING') {
			skipWaiting();
		}
	});

	workbox.routing.registerRoute(
		new RegExp('^https://www.gstatic.com/draco/versioned/decoders/*'),
		new workbox.strategies.CacheFirst(),
	);

	workbox.routing.registerRoute(
		new RegExp(
			`^https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data/*`,
		),
		new workbox.strategies.CacheFirst(),
	);
} else {
	console.log('WB ERROR');
}
