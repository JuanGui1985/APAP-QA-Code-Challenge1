module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      chromeWebSecurity: false
      failOnStatusCode: false
      baseUrl: 'https://the-internet.herokuapp.com/users/1'
    },
  },
};
