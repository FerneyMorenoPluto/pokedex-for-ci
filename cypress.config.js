const { defineConfig } = require('cypress');

module.exports = defineConfig({
	video: false,
	e2e: {
		supportFile: false,
		setupNodeEvents() {
			// implement node event listeners here
		},
	},
});

