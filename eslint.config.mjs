// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  // Your custom configs here
  {
    rules: {
      "no-console": "warn",
      "no-undef": "error",
    },
  }
);
