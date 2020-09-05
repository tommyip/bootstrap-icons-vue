export default {
  external: ['vue'],
  input: 'src/index.js',
  output: [
    {
      format: 'esm',
      file: 'dist/library.esm.js',
    },
    {
      format: 'cjs',
      file: 'dist/library.cjs.js',
    },
  ],
};
