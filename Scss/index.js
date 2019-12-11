module.exports = {
  extends: "stylelint-config-recommended",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    // class, id는 snake_case 혹은 kebab-case로 사용한다.
    "selector-class-pattern": "^([a-z][a-z0-9]*)((_|-)[a-z0-9]+)*$",
    "selector-id-pattern": "^([a-z][a-z0-9]*)((_|-)[a-z0-9]+)*$",
    // indent는 공백 2개를 사용한다.
    "indentation": [
      2,
      {
        "baseIndentLevel": 1
      }
    ],
    // nesting depth는 최대 3번까지만 허용한다.
    "max-nesting-depth": 3,
    // 빈 스타일을 허용하지 않는다.
    "block-no-empty": true,
    // 중괄호를 열기전에 공백 한칸을 사용한다.
    "block-opening-brace-space-before": "always",
    // 중괄호를 열기전에 공백 한칸을 사용한다.
    "declaration-colon-space-after": "always",
    // block을 열거나 닫을때 항상 개행을 한다.
    "block-opening-brace-newline-after": "always-multi-line",
    "block-closing-brace-newline-before": "always-multi-line",
    // 문자열은 작은 따음표를 사용한다.
    "string-quotes": "single",
    // @mixin, @if 같은 scss directive를 사용하기 위하여 at-rule-no-unknown를 초기화 하고 scss/at-rule-no-unknown 로 확장한다.
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true
  }
}
