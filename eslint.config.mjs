import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,  // Menambahkan jest ke globals
      },
    },
  },
  pluginJs.configs.recommended,
  daStyle,

  {
    rules: {
      'space-infix-ops': ['error'],
      'brace-style': ['error', '1tbs'],
      'space-before-blocks': ['error', 'always'],
      'import/prefer-default-export': 'warn'
    },
  },
];