//./plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_84TXQFqhzVEhJj58SyuBy1VLjGgi7jqnVE4Y9h0Lz54',
      {
        api_host: 'https://eu.i.posthog.com',
      }
    );
  },
};