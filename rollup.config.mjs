export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/trazo.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/trazo.esm.js',
      format: 'esm'
    }
  ]
};