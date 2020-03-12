module.exports = {
  extends: [
    './index',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  rules: {
    // indexOf 사용을 허용한다. (클라이언트 코드 때문에)
    '@typescript-eslint/prefer-includes': 'off',

    // unbound method를 허용한다. _.identity 같은 코드가 있다.
    '@typescript-eslint/unbound-method': 'off',
  },
};
