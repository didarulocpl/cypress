const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 1000000,
e2e: {
setupNodeEvents(on, config) {
require('cypress-mochawesome-reporter/plugin')(on);
},
},
});


