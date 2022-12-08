// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const { restrictedGlobals } = require('./confusing-browser-globals');

module.exports = {
  root: true,

  // recommended 설정을 기반으로 한다.
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'array-callback-return': 'warn',
    'default-case': 'off',
    'dot-location': ['warn', 'property'],
    'no-caller': 'warn',
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': ['warn', { builtinGlobals: false }],
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'error',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'off',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unreachable': 'warn',
    'no-unused-labels': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'strict': ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'warn',
      {
        object: 'require',
        property: 'ensure',
        message: 'Please use import() instead.',
      },
      {
        object: 'System',
        property: 'import',
        message: 'Please use import() instead.',
      },
    ],
    'getter-return': 'warn',

    // Length options
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // TypeScript specific rules (and turn off ESLint equivalents)
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/display-name': 'off',
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

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
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '{.,..}/**/*.css',
            group: 'type',
            position: 'after',
          },
        ],
      },
    ],

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

    // 사용하지 않는 변수를 경고한다. 단 _로 시작하는 변수는 무시한다.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
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

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
