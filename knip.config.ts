import type { KnipConfig } from "knip";

const config: KnipConfig = {
  ignore: [
    "src/components/ui/**",
    "src/routeTree.gen.ts",
    "postcss.config.mjs",
  ],
  ignoreDependencies: [
    "@next/eslint-plugin-next",
    "eslint-plugin-react",
    "globals",
    "prettier",
    "typescript-eslint",
  ],
};

export default config;
