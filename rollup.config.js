export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js',
    },
  },
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js',
    },
  },
];
