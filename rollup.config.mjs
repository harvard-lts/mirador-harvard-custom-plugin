import { babel } from "@rollup/plugin-babel";
import image from '@rollup/plugin-image';

const config = {
  input: "src/index.js",
  output: {
    dir: "dist/es",
    format: "es",
  },
  external: [/^react($|\/)/, /^react-dom($|\/)/, "mirador", /^@mui\//, /^@emotion\//, "jquery"],
  plugins: [babel({ babelHelpers: "bundled" }),image()],
};

export default config;
