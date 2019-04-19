module.exports = {
  defaultSeverity: 'error',
  extends: [
    'tslint:recommended',
  ],
  rules: {
    // 인터페이스에서 I 접두사를 붙이지 않습니다.
    'interface-name': {
      options: [
        'never-prefix',
      ],
    },

    // 한 파일에서 여러개의 클래스를 허용합니다.
    'max-classes-per-file': {
      options: [
        10,
      ],
    },

    // 한 줄을 길게 쓰는 것을 허용합니다.
    'max-line-length': {
      options: [
        400,
      ],
    },

    // public/private 키워드를 강제하지 않습니다.
    'member-access': false,

    // 멤버 순서를 강제하지 않습니다.
    // 정렬을 강제하면 버전 관리 시스템에는 좋지만, 코드를 볼 때 힘들어집니다.
    'member-ordering': false,

    // console 메소드를 사용할 수 있습니다.
    'no-console': false,

    // 빈 인터페이스를 허용합니다.
    'no-empty-interface': false,

    // reference 주석을 허용합니다.
    'no-reference': false,

    // CommonJS 스타일의 require를 허용합니다.
    'no-var-requires': false,

    // 객체 리터럴에서 필드 순서를 강제하지 않습니다.
    // 정렬을 강제하면 버전 관리 시스템에는 좋지만, 코드를 볼 때 힘들어집니다.
    'object-literal-sort-keys': false,

    // 문자열은 작은 따옴표를 사용합니다.
    'quotemark': {
      options: [
        'single',
        'jsx-single',
        'avoid-escape',
      ],
    },

    // 여러 줄로 이루어진 객체 정의, import등에서 마지막 줄에 항상 콤마를 사용합니다.
    // 버전 관리 시스템 친화적인 코드가 됩니다.
    'trailing-comma': {
      options: {
        esSpecCompliant: true,
        multiline: 'always',
        singleline: 'never',
      },
    },

    // 변수명으로 lowerCamelCase, PascalCase, snake_case, UPPER_CASE 모두 허용합니다.
    // 하지만 _로 시작하거나 끝나는 것을 허용하지는 않습니다.
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
