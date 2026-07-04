export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/trazo.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/trazo.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ]
};