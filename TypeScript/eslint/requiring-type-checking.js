module.exports = {
  extends: [
    './index',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  rules: {
    // unbound method를 허용한다. _.identity 같은 코드가 있다.
    '@typescript-eslint/unbound-method': 'off',
  },
};
