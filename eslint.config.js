import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['eslint:recommended'], // eslint:recommended
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',   // avisar si no se usa una var
      eqeqeq: 'error',            // obliga a usar === o !==
      semi: ['error', 'always'],  // obliga a usar ;
      quotes: ['error', 'single'] // fuerza comillas simples
    },
  },
]);
