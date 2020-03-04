module.exports = {
  'env': {
    'commonjs': true, // module, exports, require 허용
  },

  // recommended 설정을 기반으로 한다.
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],

  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },

  // TypeScript 파일을 지원한다.
  'parser': '@typescript-eslint/parser',

  'plugins': [
    '@typescript-eslint',
  ],

  'ignorePatterns': [
    '!.eslintrc.js', // .eslintrc.js 파일도 검사한다.
  ],

  'rules': {
    // 여러 줄로 이루어진 객체 정의, import등에서 마지막 줄에 항상 콤마를 사용한다.
    'comma-dangle': [
      'error',
      'always-multiline',
    ],

    // 들여쓰기는 공백 2칸을 사용한다.
    'indent': [
      'error',
      2,
    ],

    // 문자열은 작은 따옴표를 사용한다.
    'quotes': [
      'error',
      'single',
    ],
  },
};
