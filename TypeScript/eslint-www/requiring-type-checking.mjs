import tseslint from 'typescript-eslint';
import baseConfig from './index.mjs';

export default tseslint.config(
  ...baseConfig,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    rules: {
      // indexOf 사용을 허용한다. (클라이언트 코드 때문에)
      '@typescript-eslint/prefer-includes': 'off',

      // unbound method를 허용한다. _.identity 같은 코드가 있다.
      '@typescript-eslint/unbound-method': 'off',

      // reoverride rules by plugin:@typescript-eslint/recommended-type-checked
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
);
