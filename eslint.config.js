export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': 'warn',
      complexity: ['error', 15],
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': 'error',
      'prefer-arrow-callback': 'error',
    },
  },
];