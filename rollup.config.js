import { terser } from 'rollup-plugin-terser';

export default [
  {
    external: ['vue'],
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/lib.esm.js',
      },
      {
        format: 'cjs',
        file: 'dist/lib.common.js',
      },
    ],
  },
  {
    external: ['vue'],
    input: 'src/browser.js',
    output: [
      {
        format: 'iife',
        file: 'dist/bundle.js',
        name: 'BootstrapIconsVue',
        globals: {
          vue: 'Vue',
        },
      },
      {
        format: 'iife',
        file: 'dist/bundle.min.js',
        name: 'BootstrapIconsVue',
        globals: {
          vue: 'Vue',
        },
        plugins: [terser()],
      },
    ],
  },
];
