import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    external: ['vue'],
    input: 'src/index.ts',
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
    plugins: [typescript()],
  },
  {
    external: ['vue'],
    input: 'src/browser.ts',
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
    plugins: [typescript()],
  },
];
