import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // recommended 설정을 기반으로 한다.
  js.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  /* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access */
  importPlugin.flatConfigs.errors,
  importPlugin.flatConfigs.warnings,
  importPlugin.flatConfigs.typescript,
  /* eslint-enable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access */

  {
    languageOptions: {
      globals: {
        ...globals.commonjs, // module, exports, require 허용
      },
    },
    rules: {
      // 화살표 함수의 인자에 괄호를 써야한다.
      'arrow-parens': ['error', 'always'],

      // 여러 줄로 이루어진 객체 정의, import등에서 마지막 줄에 항상 콤마를 사용한다.
      'comma-dangle': ['error', 'always-multiline'],

      // 한문장도 중괄호로 감싼다.
      'curly': ['error', 'all'],

      // 가능하면 . 을 써서 속성에 접근한다.
      'dot-notation': ['error'],

      // 파일은 newline 문자로 끝나야 한다.
      'eol-last': ['error'],

      // null 비교를 제외하고는 ===, !==을 써야한다.
      'eqeqeq': ['error', 'always', { null: 'ignore' }],

      // 들여쓰기는 공백 2칸을 사용한다. case는 한단계 들어쓴다. ternary를 Prettier와 맞춘다.
      // 'indent': ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],

      // TypeScript decorator등에 문제가 있어서 disable 하고, Prettier에 맡긴다.
      'indent': 'off',

      // 생성자 호출시 괄호를 써야한다.
      'new-parens': ['error', 'always'],

      // 조건문에 상수를 허용하지 않는다. 다만 while(true)는 허용한다.
      'no-constant-condition': ['error', { checkLoops: false }],

      // eval을 사용할 수 없다.
      'no-eval': ['error'],

      // 연속된 빈줄을 쓸 수 없다.
      'no-multiple-empty-lines': ['error', { max: 1 }],

      // 줄 끝에 공백을 허용하지 않는다.
      'no-trailing-spaces': ['error'],

      // 객체 리터럴에서 가능한 경우 짧은 표기법을 사용한다.
      'object-shorthand': ['error'],

      // 변수선언은 한번에 하나만 해야 한다.
      'one-var': ['error', 'never'],

      // 객체 리터럴 속성 이름의 따옴표는 필요한 경우만 일관성있게 붙인다.
      'quote-props': ['error', 'consistent-as-needed'],

      // 문자열은 작은 따옴표와 Backtick을 사용한다.
      'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

      // parseInt에 10 이외의 밑을 주어야 한다.
      'radix': ['error', 'as-needed'],

      // import 순서를 강제한다.
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],

      // 자연스러운 import를 방해해서 적용하지 않는다. 예) import Redis from 'ioredis';
      'import/no-named-as-default': 'off',

      // 과도한 import를 강요해서 적용하지 않는다. 예) import dayjs from 'dayjs'; dayjs.extend(); -> import { extend } from 'dayjs';
      'import/no-named-as-default-member': 'off',

      // 단순 배열 타입에만 [] 문법을 사용한다.
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

      // camelcase를 강제하지 않는다.
      '@typescript-eslint/camelcase': 'off',

      // 반환형을 선언하지 않아도 된다.
      '@typescript-eslint/explicit-function-return-type': 'off',

      // any를 허용한다.
      '@typescript-eslint/no-explicit-any': 'off',

      // 타입 유추가 가능해도 타입을 지정할 수 있다.
      '@typescript-eslint/no-inferrable-types': 'off',

      // ! 연산자 허용
      '@typescript-eslint/no-non-null-assertion': 'off',

      // 변수명이 겹치지 않아야 한다.
      '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],

      // 함수 선언은 먼저 하지 않아도 된다.
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

      // 불필요한 조건문 / operators를 사용하지 않는다
      '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],

      // 사용하지 않는 변수를 허용하지 않는다. 단 _로 시작하는 변수는 무시한다.
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],

      // about style
      'object-curly-spacing': ['error', 'always'],
      'space-infix-ops': ['error'],
      'comma-spacing': ['error'],
      'semi': ['error'],
      'semi-spacing': ['error'],
      'arrow-spacing': ['error'],
      'space-before-blocks': ['error'],
    },
  },

  {
    files: ['**/*.js'],

    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
);
