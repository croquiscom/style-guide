# 설정 방법

`npm install --save-dev eslint typescript @croquiscom/eslint-config`로 패키지를 추가하고, 다음과 같이 `eslint.config.mjs`를 작성한다.
(각 프로젝트에 맞는 추가 설정 필요)

```javascript
import baseConfig from '@croquiscom/eslint-config/requiring-type-checking.mjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: `${import.meta.dirname}/tsconfig.json`,
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: `${import.meta.dirname}/tsconfig.json`,
        },
      },
    },

    rules: {},
  },
  {
    ignores: ['eslint.config.mjs'],
  },
);
```
