# eslint-config-www

This package includes the shareable ESLint configuration used by Kakaostyle

## Installation

```sh
npm install --save-dev @croquiscom/eslint-config-www eslint typescript
```

## Usage in www Projects

```javascript
import baseConfig from '@croquiscom/eslint-config-www/index.mjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
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

You can override the settings from `eslint-config-www` by editing the `eslint.config.mjs` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

### PR

- main를 base 브랜치로 한 작업 브랜치를 생성합니다.
- 배포 및 버전관리를 changeset을 통해 관리하고 있습니다. PR 생성시 [changeset README.md](./.changeset/README.md) 문서를 참고하여 파일을 생성해주세요.

### 배포

Github Action을 통해 자동으로 배포하고 있습니다.

changeset 파일을 포함한 PR이 main에 머지되면, Github Action 워크플로우가 동작되며, 버전 배포를 위한 Version Packages PR이 생성됩니다.
해당 PR을 머지하게 되면 Github Action의 워크플로우가 동작되며 패키지가 배포됩니다.

#### Github Action을 통한 배포가 불가능할 경우

npm 권한이 필요합니다. npm에 가입 후 권한을 요청해주세요.

- Version Packages PR이 생성되지 않았을 경우, 다음을 수행해 changelog와 package.json을 version bump를 포함한 작업 PR을 생성합니다.

```bash
npm run changeset version
git commit -m "chore: version bump"
```

- Version Packages PR이 생성되었을 경우 해당 PR을 머지하고 main를 최신 상태로 PULL 받아주세요.

```bash
npm run release
```
