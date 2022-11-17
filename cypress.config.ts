import { defineConfig } from 'cypress'

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  videoUploadOnPasses: false,
  retries: 2,
  projectId: "znhpwo",
  e2e: {
    baseUrl: 'https://example.cypress.io/todo',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})
