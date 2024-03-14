const { defineConfig } = require('cypress');

module.export = defineConfig({
	baseUrl: 'http://localhost:5000',
	video: false,
});

