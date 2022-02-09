# 설정 방법

`npm install --save-dev eslint @croquiscom/eslint-config`로 패키지를 추가하고, 다음과 같이 `.eslintrc.js`를 작성한다.
(각 프로젝트에 맞는 추가 설정 필요)

```javascript
module.exports = {
  root: true,
  extends: ['@croquiscom/eslint-config/requiring-type-checking'],
  parserOptions: {
    project: [`${__dirname}/tsconfig.json`],
  },
};
```
