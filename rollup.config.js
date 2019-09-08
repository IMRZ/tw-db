import typescript from "rollup-plugin-typescript2";

import pkg from './package.json'

export default {
  input: "src/index.ts",
  plugins: [typescript()],
  output: {
    name: "twdb",
    file: "dist/index.js",
    format: "cjs"
  },
  external: [
    "fs",
    "path",
    ...Object.keys(pkg.dependencies || {})
  ]
};
