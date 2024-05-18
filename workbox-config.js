module.exports = {
	globDirectory: 'build/',
	globPatterns: ['**/*.{ico,html,cube,glb,css,txt,js,typeface.json}'],
	maximumFileSizeToCacheInBytes: 6000000, // <-- Added (6 MB)
	swDest: 'build/sw.js',
	swSrc: 'sw.js',
};
