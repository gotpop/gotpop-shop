import { defineConfig } from "cypress";

export default defineConfig({
  retries: {
    runMode: 3,
    openMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  screenshotOnRunFailure: false,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
})
