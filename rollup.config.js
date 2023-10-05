import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    external: ["vue"],
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        file: "dist/lib.esm.js",
      },
      {
        format: "cjs",
        file: "dist/lib.common.cjs",
      },
    ],
    plugins: [typescript({ outDir: "dist" })],
  },
  {
    external: ["vue"],
    input: "src/browser.ts",
    output: [
      {
        format: "iife",
        file: "dist/bundle.js",
        name: "BootstrapIconsVue",
        globals: {
          vue: "Vue",
        },
      },
      {
        format: "iife",
        file: "dist/bundle.min.js",
        name: "BootstrapIconsVue",
        globals: {
          vue: "Vue",
        },
        plugins: [terser()],
      },
    ],
    plugins: [typescript({ outDir: "dist" })],
  },
];
