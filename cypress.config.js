const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },
});