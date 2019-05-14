module.exports = {
  defaultSeverity: 'error',
  extends: [
    'tslint:recommended',
  ],
  rules: {
    // 들여쓰기는 공백 2칸을 사용한다.
    'indent': {
      options: [
        'spaces',
        2,
      ],
    },

    // 인터페이스 이름에 I 접두사를 붙이지 않는다.
    'interface-name': {
      options: [
        'never-prefix',
      ],
    },

    // 한 파일에서 여러개의 클래스를 허용한다.
    'max-classes-per-file': {
      options: [
        10,
      ],
    },

    // 한 줄은 한 화면에 들어오게 하는 것을 권장한다.
    // 다만 특별한 경우에는 길게 작성하는 것을 허용한다.
    'max-line-length': {
      options: [
        150,
      ],
      severity: 'warning',
    },

    // public/private 키워드를 강제하지 않는다.
    'member-access': false,

    // 멤버 순서를 강제하지 않는다.
    'member-ordering': false,

    // console 메소드를 사용할 수 있다.
    'no-console': false,

    // 빈 인터페이스를 허용한다.
    'no-empty-interface': false,

    // reference 주석을 허용한다.
    'no-reference': false,

    // CommonJS 스타일의 require를 허용한다.
    'no-var-requires': false,

    // 객체 리터럴에서 필드 순서를 강제하지 않는다.
    'object-literal-sort-keys': false,

    // 문자열은 작은 따옴표를 사용한다.
    'quotemark': {
      options: [
        'single',
        'jsx-single',
        'avoid-escape',
      ],
    },

    // 여러 줄로 이루어진 객체 정의, import등에서 마지막 줄에 항상 콤마를 사용한다.
    'trailing-comma': {
      options: {
        esSpecCompliant: true,
        multiline: 'always',
        singleline: 'never',
      },
    },

    // 몇 가지 TypeScript keyword들은 변수나 파라미터 이름으로 사용할 수 없다.
    // 변수 이름은 lowerCamelCased, UPPER_CASED, PascalCase, snake_case를 허용힌다.
    // _로 시작하거나 끝나는 것을 허용하지 않는다.
    'variable-name': {
      options: [
        'ban-keywords',
        'check-format',
        'allow-pascal-case',
        'allow-snake-case',
      ],
    },
  },
};
