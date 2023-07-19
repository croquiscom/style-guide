module.exports = {
  extends: [
    './index',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],

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

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
